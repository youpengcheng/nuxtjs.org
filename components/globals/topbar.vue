<template>
  <div class="nTopbar">
    <div class="container">
      <div class="nTopbar__Logo"><nuxt-link to="/"><n-logo/></nuxt-link></div>
      <nav class="nTopbar__Menu">
        Guide / API / Examples / FAQ
      </nav>
    </div>
    <svg class="nTopbar__Decoration nTopbar__Decoration__Left">
      <polygon class="nTopbar__Decoration__Left--a" points="0 0,160 0,0 240"/>
      <polygon class="nTopbar__Decoration__Left--b" points="0 0,80 0,0 120"/>
    </svg>
    <svg class="nTopbar__Decoration nTopbar__Decoration__Right">
      <polygon class="nTopbar__Decoration__Right--a" points="0 0,160 0,160 240"/>
      <polygon class="nTopbar__Decoration__Right--b" points="80 0,160 0,160 120"/>
    </svg>
    <div class="nTopbar__Button nTopbar__Button--menu" @click="$emit('update:showMenu', true)"><n-icon-bars/></div>
    <a class="nTopbar__Button nTopbar__Button--gh" href="https://github.com/nuxt/nuxt.js" target="_blank"><n-icon-gh/></a>
    <div class="nTopbar__Button nTopbar__Button--lang" @click="$emit('update:showTranslations', true)"><n-icon-globe/></div>
    <div class="nTopbar__Button nTopbar__Button--search" @click="$emit('update:showSearch', true)"><n-icon-search/></div>
  </div>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs'
import nIconGh from '@/components/icons/github'
import nIconGlobe from '@/components/icons/globe'
import nIconBars from '@/components/icons/bars'
import nIconSearch from '@/components/icons/search'

export default {
  props: {
    showMenu: {
      type: Boolean,
      required: true
    },
    showTranslations: {
      type: Boolean,
      required: true
    },
    showSearch: {
      type: Boolean,
      required: true
    }
  },
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
  display: flex;
  position: relative;
  z-index: 100;
  padding: 0 160px;
  background-color: #fff;
  &__Logo {
    padding-top: 14px;
    a, .NuxtJS {
      height: 28px;
    }
  }
  &__Menu {
    flex-grow: 1;
    padding-top: 24px;
    font-size: 16px;
    text-align: right;
  }
  &__Decoration {
    width: 160px;
    height: 240px;
    top: 0;
    position: absolute;
    z-index: 1;
    &__Left {
      left: 0;
      &--a { fill: $color_vue_green; }
      &--b { fill: $color_vue_blue; }
    }
    &__Right {
      right: 0;
      &--a { fill: $color_vue_green; }
      &--b { fill: $color_nuxt_green; }
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
      width: 24px;
      height: 24px;
      &:hover {
        opacity: 1;
      }
    }
    &--menu { left: 15px; }
    &--gh { left: 90px; }
    &--lang { right: 90px; }
    &--search { right: 15px; }
  }
}
</style>
