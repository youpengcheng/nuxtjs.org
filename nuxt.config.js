const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  css: [
    'normalize.css',
    '@/assets/style.scss'
  ],
  plugins: [
    '@/plugins/element-ui'
  ],
  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/google-analytics",
    "@nuxtjs/pwa"
    // "@nuxtjs/sentry"
  ],
  axios: {
    proxy: true,
    prefix: '/v1'
    // See https://github.com/nuxt-community/axios-module#options
  },
  'google-analytics': {
    id: 'UA-88662854-1'
  },
  proxy: {
    '/v1': {
      target: (process.env.NODE_ENV === 'production') ? 'https://docs.api.nuxtjs.org' : 'http://localhost:4000',
      pathRewrite: { '^/v1': '' }
    }
  },
  // sentry: {
  //   project_id: process.env.SENTRY_PROJECT_ID,
  //   public_key: process.env.SENTRY_PUBLIC_KEY,
  //   private_key: process.env.SENTRY_PRIVATE_KEY
  // },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
