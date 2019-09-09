const { promisify } = require('util')
const { resolve, join } = require('path')
const fse = require('fs-extra')
const micro = require('micro')
const nodeReq = require('node-req')
const Markdown = require('@nuxt/markdown')
const graymatter = require('gray-matter')
const chokidar = require('chokidar')
const readdirp = require('readdirp')
const _ = require('lodash')
const naturalCompare = require('string-natural-compare')
const logger = require('consola').withScope('modules/content')
const SSE = require('./sse')
const { debounce } = require('./utils')

class Server {
  constructor (options) {
    this.dir = options.dir || process.cwd()
    this.port = options.port || 3001
    this.server = null
    this.md = new Markdown({
      toc: (options.toc === false ? false : true)
    })
    this.mapFiles = new Map()
    options.watch && this.watch()
  }

  async filesTree() {
    this.mapFiles.clear()
    const readOptions = {
      fileFilter: ['*.json', '**.md'],
      type: 'files_directories'
    }

    const files = await readdirp.promise(this.dir, readOptions)
    files.forEach(({ path }) => {
      this.mapFiles.set(this.getPermalink(path), join(this.dir, path))
    })
    this.mapFiles.set('/', this.dir)
  }

  getPermalink(path) {
    let permalink = path.replace(/\.[^/.]+$/, '').replace(/\/$/, '').replace(this.dir, '').replace(/\/\d+-/g, '/')

    if (permalink[0] !== '/') {
      permalink = '/' + permalink
    }

    return permalink
  }

  async handle(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    const url = nodeReq.url(req).replace(/\/$/, '')
    // Handle SSE
    if (this.sse && url === '/sse') {
      return this.sse.subscribe(req, res)
    }

    const options = this.getReqOptions(req)
    const path = this.mapFiles.get(url)
    if (!path) {
      return micro.send(res, 404, { message: 'Content not found' })
    }

    try {
      const data = await this.get(path, options, true)
      micro.send(res, 200, data)
    } catch (err) {
      console.error(err)
      micro.send(res, 500, { message: err.message })
    }
  }

  getReqOptions(req) {
    let { fields } = nodeReq.get(req) // get returns the querystring

    if (typeof fields === 'string') {
      fields = fields.split(',')
    }

    return { fields }
  }

  // Server handle request method
  async get (path, options = {}, fromReq = false) {
    const dirPath = path.replace(/\.[^/.]+$/, '') // Remove extension
    let isDir = false
    const stats = await fse.lstat(dirPath).catch(err => null)

    if (stats && stats.isDirectory()) {
      isDir = true
    }
    if (isDir && fromReq) {
      // exlude body when getting listing
      options.fields = options.fields || ['attrs', 'toc']
      return this.getDir(dirPath, options)
    }

    const fileData = await this.getFileData(dirPath, options)
    if (!fileData && !isDir && fromReq) {
      throw new Error(`Content not found`)
    }

    return {
      path: this.getPermalink(path),
      file: path.replace(this.dir, ''),
      isDir: (isDir ? true : undefined),
      ...fileData
    }
  }

  async getDir(path, options) {
    let files = (await fse.readdir(path, { withFileTypes: true }))

    files = _.uniqBy(files, ({ name }) => name.replace(/\.[^/.]+$/, ''))
    files.sort((f1, f2) => naturalCompare(f1.name, f2.name))
    const results = await Promise.all(files.map(file => this.get(join(path, file.name), options)))
    let fileData = await this.getFileData(path, options)

    return {
      path: this.getPermalink(path),
      file: path.replace(this.dir, ''),
      isDir: true,
      ...fileData,
      results
    }
  }

  async getFileData (path, { fields }) {
    const fileType = await this.detectFileType(path)

    if (!fileType) {
      return null
    }
    path = path + '.' + fileType
    let data = {
      attrs: {},
      body: {}
    }
    // Check if Markdown path exists
    if (fileType === 'md') {
      data.body = await fse.readFile(path, 'utf8')
      if (data.body.trimStart().startsWith('---')) {
        const { content: body, data: attrs } = graymatter(data.body)
        data = { attrs, body }
      }
    }

    // Otherwise JSON path
    if (fileType === 'json') {
      data.body = await fse.readJson(path)
      const { attrs, body } = data.body
      if (attrs && body) {
        data = { attrs, body }
      }
    }

    // Transform markdown body to json
    if (typeof data.body === 'string') {
      const { html, toc } = await this.mdToJson(data.body)
      data.body = html
      if (toc) {
        data.toc = toc
      }
    }

    if (fields) {
      data = _.pick(data, fields)
    }
    return {
      path: this.getPermalink(path),
      file: path.replace(this.dir, ''),
      ...data
    }
  }

  async detectFileType (path) {
    const mdPath = path + '.md'

    if (await fse.pathExists(mdPath)) {
      return 'md'
    }

    const jsonPath = path + '.json'
    if (await fse.pathExists(jsonPath)) {
      return 'json'
    }

    return null
  }

  async mdToJson(content = '') {
    const { html, toc } = await this.md.toMarkup(content)

    return { html, toc }
  }

  async watch() {
    this.sse = new SSE()
    chokidar.watch(['**/*'], {
      cwd: this.dir,
      ignoreInitial: true,
      ignored: 'node_modules/**/*'
    })
      .on('change', debounce(path => this.sse.broadcast('change', { event: 'change', path }), 200))
      .on('add', debounce(path => this.filesTree() && this.sse.broadcast('change', { event: 'add', path }), 200))
      .on('unlink', debounce(path => this.filesTree() && this.sse.broadcast('change', { event: 'unlink', path }), 200))
  }

  // Start server
  async listen () {
    if (this.server) {
      return
    }

    this.server = micro(this.handle.bind(this))
    this.server.listen = promisify(this.server.listen)
    this.server.close = promisify(this.server.close)

    await this.filesTree()
    await this.server.listen(this.port)

    this.server.url = `http://localhost:${this.port}`
    logger.success(`Contents server listening on \`${this.server.url}\``)
  }

  // Stop server
  async close () {
    if (!this.server) {
      return
    }

    logger.info(`Stopping contents server...`)
    await this.server.close()
    delete this.server
  }
}

module.exports = Server
