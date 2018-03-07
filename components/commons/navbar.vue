<template>
  <div class="nNavbar">
    <div class="nNavbar__Toggle" @click="showMenu = true">
      <n-icon-menu/>
    </div>
    <div class="nNavbar__Logo">
      <nuxt-link to="/">
        <n-logo/>
      </nuxt-link>
    </div>
    <div class="nNavbar__Menu" :class="{'nNavbar__Menu--open': showMenu}">
      <div @click="showMenu = false">
        <n-icon-x/>
      </div>
      <div class="nav">
        <div class="nav__item"></div>
        <div class="nav__item"></div>
        <div class="nav__item"></div>
        <div class="nav__item"></div>
      </div>
    </div>
    <div class="nNavbar__Search">
      <n-icon-search/>
    </div>
  </div>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs.vue'
import nIconX from '@/components/icons/x'
import nIconMenu from '@/components/icons/menu'
import nIconSearch from '@/components/icons/search'

export default {
  components: {
    nLogo,
    nIconX,
    nIconMenu,
    nIconSearch
  },
  data () {
    return {
      showMenu: false
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
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 64px;
  padding: 0 20px;
  color: $color_vue_black;
  background: #fff;
  box-shadow: 0 0 10px $color_silver;
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  &__Logo, &__Toggle, &__Search {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
  &__Logo {
    a {
      width: 120px;
      height: 36px;
      overflow: hidden;
      display: block;
      .NuxtJS {
        height: 36px;
      }
    }
  }
  &__Menu {
    background: $color_vue_green;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
    transition-property: transform;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transition-delay: .5s;
    .nav {
      &__item {
        width: 160px;
        height: 20px;
        background: #fff;
        transform: translateX(-500px);
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        &:nth-child(1) { transition-delay: 0.2s; }
        &:nth-child(2) { transition-delay: 0.3s; }
        &:nth-child(3) { transition-delay: 0.4s; }
        &:nth-child(4) { transition-delay: 0.5s; }
        &:not(:last-child) {
          margin-bottom: 40px;
        }
      }
    }
    .feather {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    &--open {
      transform: translateX(0px);
      transition-delay: 0s;
      .nav__item {
        transform: translateX(0px);
      }
    }
  }
}
</style>
