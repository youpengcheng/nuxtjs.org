const { join } = require('path')
const logger = require('consola').withScope('modules/content')
const getPort = require('get-port')
const Server = require('./server')

module.exports = async function (moduleOptions) {
  const isDev = this.options.dev
  const isGenerate = this.options._generate
  const isStart = this.options._start
  const isBuild = this.options._build
  const runServer = isDev || isGenerate || isStart
  const port = await getPort()

  const options = {
    port,
    dir: join(this.options.srcDir, 'content'),
    watch: isDev,
    ...this.options.content,
    ...moduleOptions
  }

  // Start docs server
  if (runServer) {
    const server = new Server(options)
    await server.listen()
    if (isGenerate) {
      this.nuxt.hook('generate:done', () => server.close())
    } else {
      this.nuxt.hook('close', () => server.close())
    }
  }

  if (isBuild) {
    // Add runtime plugin
    this.addPlugin({
      fileName: 'plugins/content.js',
      src: join(__dirname, 'templates/plugin.js'),
      options: {
        url: `http://localhost:${options.port}`,
        watch: options.watch
      }
    })
  }
}
