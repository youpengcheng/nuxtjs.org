<template>
  <nav class="navbar">
    <n-container>
      <nuxt-link class="navbar__logo" to="/">
        <n-logo/>
      </nuxt-link>
      <ul class="navbar__menu">
        <li><nuxt-link to="/">Guide</nuxt-link></li>
        <li><nuxt-link to="/">API</nuxt-link></li>
        <li><nuxt-link to="/">Resources</nuxt-link></li>
        <li><nuxt-link to="/">Translations</nuxt-link></li>
      </ul>
    </n-container>
  </nav>
</template>

<script>
import nLogo from '@/components/svg/nuxtjs.vue'
import nContainer from '@/components/layers/container.vue'

export default {
  components: {
    nLogo,
    nContainer
  }
}
</script>

<style lang="scss">
@import '~assets/scss/colors';

.navbar {
  height: 64px;
  background-color: #fff;
  &__logo {
    display: block;
    float: left;
    height: 64px;
    padding-top: 13px;
    .NuxtJS {
      height: 34px;
    }
  }
  &__menu {
    float: right;
    list-style: none;
    li {
      height: 64px;
      float: left;
      padding-top: 17px;
      padding-left: 30px;
      a {
        padding: 5px;
        height: 34px;
        line-height: 34px;
        font-size: 16px;
        text-decoration: none;
        color: $color_vue_blue;
        &:hover {
          color: $color_nuxt_green;
        }
      }
    }
  }
}
</style>
