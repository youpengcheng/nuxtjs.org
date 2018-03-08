<template>
  <div class="nNavbar">
    <div class="nNavbar__Toggle" @click="showMenu = true"><n-icon-menu/></div>
    <div class="nNavbar__Logo"><nuxt-link to="/"><n-logo/></nuxt-link></div>
    <div class="nNavbar__Menu" :class="{'nNavbar__Menu--open': showMenu}">
      <div class="nNavbar__Menu__Toggle" @click="showMenu = false"><n-icon-x/></div>
      <ul class="nNavbar__Menu__List">
        <li class="nNavbar__Menu__List__Item">Guide</li>
        <li class="nNavbar__Menu__List__Item">API</li>
        <li class="nNavbar__Menu__List__Item">Resources</li>
        <li class="nNavbar__Menu__List__Item">Ecosystem</li>
        <li class="nNavbar__Menu__List__Item">Translations</li>
      </ul>
    </div>
    <div class="nNavbar__Icons">
      <a class="nNavbar__Icons__Link" href="#"><n-icon-search/></a>
      <a class="nNavbar__Icons__Link" href="https://twitter.com/nuxt_js" target="_blank"><n-icon-twitter/></a>
      <a class="nNavbar__Icons__Link" href="https://github.com/nuxt" target="_blank"><n-icon-github/></a>
    </div>
  </div>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs.vue'
import nIconX from '@/components/icons/x'
import nIconMenu from '@/components/icons/menu'
import nIconSearch from '@/components/icons/search'
import nIconTwitter from '@/components/icons/twitter'
import nIconGithub from '@/components/icons/github'

export default {
  components: {
    nLogo,
    nIconX,
    nIconMenu,
    nIconSearch,
    nIconTwitter,
    nIconGithub
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
  &__Logo, &__Toggle, &__Icons {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
  &__Toggle, &__Toggle:active, &__Toggle:visited {
    color: $color_vue_blue;
    &:hover {
      color: $color_vue_green;
    }
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
    &__Toggle {
      color: #fff;
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
    }
    &__List {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      &__Item {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        transform: translateX(-500px);
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        &:nth-child(1) { transition-delay: 0.2s; }
        &:nth-child(2) { transition-delay: 0.3s; }
        &:nth-child(3) { transition-delay: 0.4s; }
        &:nth-child(4) { transition-delay: 0.5s; }
        &:nth-child(5) { transition-delay: 0.6s; }
        &:not(:last-child) {
          margin-bottom: 40px;
        }
      }
    }
    &--open {
      transform: translateX(0px);
      transition-delay: 0s;
      .nNavbar__Menu__List__Item {
        transform: translateX(0px);
      }
    }
  }
  &__Icons {
    &__Link, &__Link:active, &__Link:visited {
      display: block;
      color: $color_vue_blue;
      &:hover {
        color: $color_vue_green;
      }
      &:nth-child(2), &:nth-child(3) { display: none; }
    }
  }
  @media (min-width: 992px) {
    height: 72px;
    padding: 0 30px;
    justify-content: flex-start;
    &__Toggle {
      display: none;
    }
    &__Menu {
      position: relative;
      background: #fff;
      transform: none;
      padding: 0 30px;
      &__Toggle {
        display: none;
      }
      &__List {
        height: 100%;
        align-items: center;
        flex-direction: row;
        &__Item {
          font-size: 14px;
          transform: none;
          padding-top: 5px;
          color: $color_vue_blue;
          &:not(:last-child) {
            margin-bottom: 0;
            margin-right: 30px;
          }
        }
      }
    }
    &__Icons {
      flex-grow: 1;
      padding-top: 5px;
      justify-content: flex-end;
      &__Link {
        &:nth-child(2), &:nth-child(3) {
          display: block;
        }
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
