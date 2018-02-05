<template>
  <div>
    <n-sidebar/>
    <pre>{{ attrs }}</pre>
    <article v-if="$route.params.article">{{ body }}</article>
  </div>
</template>

<script>
import nSidebar from '~/components/partials/sidebar.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    nSidebar
  },
  async asyncData({ app, params, store, error }) {
    if (params.article) {
    try {
        let path = `/${store.getters.t('iso')}/${params.section}/${params.article}`
        let { attrs, body } = await app.$axios.$get(path)
        if (!attrs.title) console.error(`[${path}] ${store.getters.t('text/please_define_title')}.`) // eslint-disable-line no-console
        if (!attrs.description) console.error(`[${path}] ${store.getters.t('text/please_define_description')}.`) // eslint-disable-line no-console
        let docLink = `https://github.com/nuxt/docs/blob/master${path}.md`
        if (store.getters.t('iso') === 'ru') {
          docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${path}.md`
        } else if (store.getters.t('iso') === 'cn') {
          docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev${path}.md`
        }
        return { attrs, body, docLink }
      } catch (err) {
        if (err.response.status !== 404) {
          return error({ statusCode: 500, message: store.getters.t('text/an_error_occured') })
        }
        return error({ statusCode: 404, message: store.getters.t('text/api_page_not_found') })
      }
    }
    return {
      attrs: {
        title: 'Titre du menu',
        description: 'Description du menu'
      }
    }
  },
  scrollToTop: true,
  head() {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: this.attrs.description }
      ]
    }
  },
  computed: {
    ...mapGetters(['t']),
    menu () {
      return this.$store.getters.get('menu')[this.$route.params.section]
    }
  }
}
</script>

<style lang="scss">
</style>
