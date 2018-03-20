<template>
  <div class="nApp">
    <n-search :show-search.sync="showSearch"/>
    <n-menu :show-menu.sync="showMenu"/>
    <n-translations :show-translations.sync="showTranslations"/>
    <n-topbar :show-menu.sync="showMenu" :show-translations.sync="showTranslations" :show-search.sync="showSearch"/>
    <nuxt/>
  </div>
</template>

<script>
import nTopbar from '@/components/globals/topbar'
import nSearch from '~/components/globals/search'
import nMenu from '~/components/globals/menu'
import nTranslations from '~/components/globals/translations'

export default {
  components: {
    nTopbar,
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
// .nApp {
//   padding-top: 64px;
//   @media (min-width: 992px) {
//     padding-top: 72px;
//   }
// }
</style>
