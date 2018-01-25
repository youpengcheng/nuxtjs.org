export const state = () => ({
  locale: 'en',
  ghVersion: null,
  lang: null,
  menu: null
})

export const getters = {
  get (state) { return (key) => state[key] },
  docVersion (state) { return state.lang.docVersion || null }
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
      const { data } = await this.$axios.get('/releases')
      commit('set', { key: 'ghVersion', value: data[0].name })
      const lang = await this.$axios.get(`/lang/${getters.get('locale')}`)
      commit('set', { key: 'lang', value: lang.data })
      const menu = await this.$axios.get(`/menu/${getters.get('locale')}`)
      commit('set', { key: 'menu', value: menu.data })
    } catch (e) {
      console.error('Error on [nuxtServerInit] action, please run the docs server.') // eslint-disable-line no-console
    }
  }
}
