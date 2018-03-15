<template>
  <div class="nNavbar">
    <n-navbar-toggle :hidden="showSearch" :show-menu.sync="showMenu"/>
    <n-navbar-logo :hidden="showSearch"/>
    <n-navbar-icons :show-search.sync="showSearch"/>
    <n-navbar-search :visible="showSearch"/>
    <n-navbar-menu :show-menu.sync="showMenu" :show-translations.sync="showTranslations"/>
    <n-navbar-translations :show-translations.sync="showTranslations"/>
  </div>
</template>

<script>
import nNavbarToggle from '~/components/navbar/toggle'
import nNavbarLogo from '~/components/navbar/logo'
import nNavbarIcons from '~/components/navbar/icons'
import nNavbarSearch from '~/components/navbar/search'
import nNavbarMenu from '~/components/navbar/menu'
import nNavbarTranslations from '~/components/navbar/translations'

export default {
  components: {
    nNavbarToggle,
    nNavbarLogo,
    nNavbarIcons,
    nNavbarSearch,
    nNavbarMenu,
    nNavbarTranslations
  },
  watch: {
    $route: function () {
      this.showMenu = false
    }
  },
  data () {
    return {
      showMenu: false,
      showTranslations: false,
      showSearch: false
    }
  }
}
</script>

<style lang="scss">
@import '~assets/colors';

.nNavbar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 990;
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 64px;
  padding: 0 20px;
  color: $color_vue_black;
  background: #fff;
  box-shadow: 0 0 5px $color_silver;
}
@media (min-width: 992px) {
  .nNavbar {
    height: 72px;
    padding: 0 30px;
    justify-content: flex-start;
  }
}
</style>
