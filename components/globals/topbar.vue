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
    <div class="nTopbar__Button nTopbar__Button--menu"><n-icon-bars/></div>
    <div class="nTopbar__Button nTopbar__Button--gh"><n-icon-gh/></div>
    <div class="nTopbar__Button nTopbar__Button--lang"><n-icon-globe/></div>
    <div class="nTopbar__Button nTopbar__Button--search"><n-icon-search/></div>
  </div>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs'
import nIconGh from '@/components/icons/github'
import nIconGlobe from '@/components/icons/globe'
import nIconBars from '@/components/icons/bars'
import nIconSearch from '@/components/icons/search'

export default {
  components: {
    nLogo,
    nIconGh,
    nIconGlobe,
    nIconBars,
    nIconSearch
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
