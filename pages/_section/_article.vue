<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span>Navigator Three</span>
      </el-menu-item>
    </el-menu>
    <pre>{{ attrs }}</pre>
    <article v-if="$route.params.article">{{ body }}</article>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

import { mapGetters } from 'vuex'

export default {
  async asyncData({ app, params, store, error }) {
    try {
      let path = `/${store.getters.t('iso')}/${params.section}/${params.article || 'index'}`
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
  // components: {
  //   Logo
  // }
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
