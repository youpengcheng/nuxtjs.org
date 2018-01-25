<template>
  <div>
    <el-menu default-active="0" class="el-menu-demo" mode="horizontal">
      <el-submenu index="0">
        <template slot="title">{{ t('learn') }}</template>
        <el-menu-item index="0-0">
          <nuxt-link to="/guide">{{ t('guide') }}</nuxt-link>
        </el-menu-item>
        <el-menu-item index="0-1">
          <nuxt-link to="/api">{{ t('api') }}</nuxt-link>
        </el-menu-item>
        <el-menu-item index="0-2">
          <nuxt-link to="/faq">{{ t('faq') }}</nuxt-link>
        </el-menu-item>
        <el-menu-item index="0-3">
          <nuxt-link to="/examples">{{ t('examples') }}</nuxt-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="1">{{ t('ecosystem') }}</el-menu-item>
      <el-menu-item index="2">{{ t('translations') }}</el-menu-item>
    </el-menu>
    <nuxt/>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

import { mapGetters } from 'vuex'

export default {
  // components: {
  //   Logo
  // }
  computed: {
    ...mapGetters(['t'])
  }
}
</script>

<style lang="scss">
</style>
