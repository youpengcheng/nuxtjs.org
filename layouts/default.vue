<template>
  <div class="nApp">
    <n-search :show-search.sync="showSearch"/>
    <n-menu :show-menu.sync="showMenu"/>
    <n-translations :show-translations.sync="showTranslations"/>
    <n-topbar :show-menu.sync="showMenu" :show-translations.sync="showTranslations" :show-search.sync="showSearch"/>
    <div class="fixedTopbar">
      test
    </div>
    <nuxt/>
    <n-footer/>
  </div>
</template>

<script>
import nTopbar from '@/components/globals/topbar'
import nFooter from '@/components/globals/footer'
import nSearch from '~/components/globals/search'
import nMenu from '~/components/globals/menu'
import nTranslations from '~/components/globals/translations'

export default {
  components: {
    nTopbar,
    nFooter,
    nSearch,
    nMenu,
    nTranslations
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
.fixedTopbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  color: #000;
  text-align: center;
  z-index: 90;
  background-color: #fff;
  border-bottom: 1px solid #DAE1E9;
}
.container {
  width: 1040px;
  margin: 0 auto;
}
// .nApp {
//   padding-top: 64px;
//   @media (min-width: 992px) {
//     padding-top: 72px;
//   }
// }
</style>
