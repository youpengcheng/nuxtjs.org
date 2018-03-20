<template>
  <div class="nTopbar">
    <svg class="nTopbar__Decoration nTopbar__Decoration__Left">
      <polygon class="nTopbar__Decoration__Left--big" points="0 0,180 0,0 270"/>
      <polygon class="nTopbar__Decoration__Left--small" points="0 0,100 0,0 150"/>
    </svg>
    <svg class="nTopbar__Decoration nTopbar__Decoration__Right">
      <polygon class="nTopbar__Decoration__Right--big" points="0 0,180 0,180 270"/>
      <polygon class="nTopbar__Decoration__Right--small" points="80 0,180 0,180 150"/>
    </svg>
    <div class="nTopbar__Logo">
      <nuxt-link to="/">
        <n-logo/>
      </nuxt-link>
    </div>
    <div class="nTopbar__Button nTopbar__Button--menu" @click="showMenu = true"><n-icon-bars/></div>
    <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="nTopbar__Button nTopbar__Button--gh"><n-icon-gh/></a>
    <div class="nTopbar__Button nTopbar__Button--lang" @click="showTranslations = true"><n-icon-globe/></div>
    <div class="nTopbar__Button nTopbar__Button--search" @click="showSearch = true"><n-icon-search/></div>
    <n-navbar-search :visible="showSearch"/>
    <n-navbar-menu :show-menu.sync="showMenu"/>
    <n-navbar-translations :show-translations.sync="showTranslations"/>
  </div>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs'
import nIconGh from '@/components/icons/github'
import nIconGlobe from '@/components/icons/globe'
import nIconBars from '@/components/icons/bars'
import nIconSearch from '@/components/icons/search'
import nNavbarSearch from '~/components/topbar/search'
import nNavbarMenu from '~/components/topbar/menu'
import nNavbarTranslations from '~/components/topbar/translations'

export default {
  components: {
    nLogo,
    nIconGh,
    nIconGlobe,
    nIconBars,
    nIconSearch,
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

.nTopbar {
  &__Decoration {
    width: 180px;
    height: 270px;
    top: 0;
    position: absolute;
    z-index: 1;
    &__Left {
      left: 0;
      &--small {
        fill: $color_vue_blue;
      }
      &--big {
        fill: $color_vue_green;
      }
    }
    &__Right {
      right: 0;
      &--small {
        fill: $color_nuxt_green;
      }
      &--big {
        fill: $color_vue_green;
      }
    }
  }
  &__Logo {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    a, .NuxtJS {
      height: 32px;
    }
  }
  &__Button {
    display: block;
    cursor: pointer;
    top: 20px;
    position: absolute;
    z-index: 10;
    .Icon {
      color: #fff;
      opacity: 0.75;
      width: 30px;
      height: 30px;
      &:hover {
        opacity: 1;
      }
    }
    &--menu {
      left: 20px;
    }
    &--gh {
      left: 100px;
    }
    &--lang {
      right: 100px;
    }
    &--search {
      right: 20px;
    }
  }
}
</style>
