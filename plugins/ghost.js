import GhostContentAPI from '@tryghost/content-api'

export default function (context, inject) {
  const api = new GhostContentAPI({
    url: process.env.GHOST_API || 'http://localhost:2368',
    key: 'ecef7fe394d928919a597cfc35',
    version: 'v2'
  })

  inject('ghost', api)
  context.$ghost = api
}
