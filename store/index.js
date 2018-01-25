export const state = () => ({
  locale: 'en',
  ghVersion: null,
  lang: null,
  menu: null
})

export const getters = {
  t (state) { return (key) => state.lang ? state.lang[key] : 'undefined' },
  get (state) { return (key) => state[key] }
}

export const mutations = {
  set (state, { key, value }) { state[key] = value }
}

export const actions = {
  async nuxtServerInit({ getters, commit }, { req, redirect }) {
    const hostParts = (req.headers.host || '').replace('.org', '').split('.')
    // If url like ja.nuxtjs.org
    if (hostParts.length === 2) {
      if (hostParts[0] === 'www') return redirect(301, 'https://nuxtjs.org' + req.url)
      commit('set', { key: 'locale', value: hostParts[0] })
    }
    try {
      const releases = await this.$axios.$get('/releases')
      commit('set', { key: 'ghVersion', value: releases[0].name })
      const lang = await this.$axios.$get(`/lang/${getters.get('locale')}`)
      commit('set', { key: 'lang', value: lang })
      const menu = await this.$axios.$get(`/menu/${getters.get('locale')}`)
      commit('set', { key: 'menu', value: menu })
    } catch (e) {
      console.error('Error on [nuxtServerInit] action, please run the docs server.') // eslint-disable-line no-console
    }
  }
}
