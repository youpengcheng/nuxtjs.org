<template>
  <div>
    <n-topbar/>
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
      <el-submenu index="1">
        <template slot="title">{{ t('ecosystem') }}</template>
        <el-menu-item index="1-0">
          <nuxt-link to="/news">{{ t('guide') }}</nuxt-link><!-- twitter / medium / release notes -->
        </el-menu-item>
        <el-menu-item index="1-1">
          <nuxt-link to="/support-us">{{ t('api') }}</nuxt-link><!-- team & github repos / contibution guide / open collective / shop sticker / press -->
        </el-menu-item>
        <el-menu-item index="1-2">
          <nuxt-link to="/modules">{{ t('faq') }}</nuxt-link>
        </el-menu-item>
        <el-menu-item index="1-3">
          <nuxt-link to="/examples">{{ t('examples') }}</nuxt-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2">{{ t('translations') }}</el-menu-item>
    </el-menu>
    <nuxt/>
    <n-footer/>
  </div>
</template>

<script>
import nTopbar from '~/components/partials/topbar.vue'
import nFooter from '~/components/partials/footer.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    nTopbar,
    nFooter
  },
  computed: {
    ...mapGetters(['t'])
  }
}
</script>

<style lang="scss">
</style>
