<template>
  <div class="nNavbar">
    <div class="nNavbar__Toggle" :class="{'nNavbar__Toggle--hidden': showSearch}" @click="showMenu = true"><n-icon-menu/></div>
    <div class="nNavbar__Logo" :class="{'nNavbar__Logo--hidden': showSearch}"><nuxt-link to="/"><n-logo/></nuxt-link></div>
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
    <div class="nNavbar__Search" :class="{'nNavbar__Search--open': showSearch}">
      <input type="text" class="nNavbar__Search__Input" name="search" id="algolia" placeholder="Search"/>
    </div>
    <div class="nNavbar__Icons">
      <a class="nNavbar__Icons__Link" href="#" @click.prevent="showSearch = !showSearch">
        <n-icon-x v-if="showSearch"/>
        <n-icon-search v-else/>
      </a>
      <a class="nNavbar__Icons__Link" href="https://twitter.com/nuxt_js" target="_blank"><n-icon-twitter/></a>
      <a class="nNavbar__Icons__Link" href="https://github.com/nuxt" target="_blank"><n-icon-github/></a>
    </div>
  </div>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs.vue'
import nIconX from '@/components/icons/times'
import nIconMenu from '@/components/icons/bars'
import nIconSearch from '@/components/icons/search'
import nIconTwitter from '@/components/icons/twitter'
import nIconGithub from '@/components/icons/github'

let scriptInjected = false
let callbacks = []
let onScriptLoaded = (cb) => callbacks.push(cb)
let scriptLoaded = () => callbacks.forEach((cb) => cb())

export default {
  components: {
    nLogo,
    nIconX,
    nIconMenu,
    nIconSearch,
    nIconTwitter,
    nIconGithub
  },
  mounted() {
    onScriptLoaded(() => this.addInstantSearch())
    if (scriptInjected) return
    // Load JS
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', '//cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js')
    document.getElementsByTagName('body')[0].appendChild(script)
    script.onload = scriptLoaded
    // Load CSS
    var link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css')
    document.getElementsByTagName('body')[0].appendChild(link)
    scriptInjected = true
  },
  data () {
    return {
      showMenu: false,
      showSearch: false
    }
  },
  methods: {
    addInstantSearch() {
      window.docsearch({
        apiKey: process.env.docSearchApiKey,
        indexName: 'nuxtjs',
        inputSelector: '#algolia',
        algoliaOptions: { 'facetFilters': [`tags:${this.$store.getters.get('locale')}`] },
        debug: true // Set debug to true if you want to inspect the dropdown
      })
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
  &__Toggle {
    width: 20px;
    color: $color_vue_blue;
    transition-property: width;
    transition-duration: 0.5s;
    &:hover {
      color: $color_vue_green;
    }
    &--hidden {
      width: 0;
    }
  }
  &__Logo {
    flex-grow: 1;
    width: 100%;
    transition-property: width, flex-grow;
    transition-duration: 0.5s;
    a {
      width: 100px;
      height: 32px;
      overflow: hidden;
      display: block;
      .NuxtJS {
        height: 32px;
      }
    }
    &--hidden {
      width: 0;
    }
  }
  &__Menu {
    background: $color_vue_green;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
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
        font-size: 16px;
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
  &__Search {
    width: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    transition-property: width, flex-grow;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    &__Input {
      display: block;
      height: 34px;
      font-size: 16px;
      color: $color_vue_silver;
      background-color: $color_nuxt_silver;
      border: none;
      border-radius: 34px;
      width: 100%;
      padding: 0 17px;
      outline: none;
    }
    &--open {
      flex-grow: 1;
      width: 100%;
      overflow: visible;
      .nNavbar__Logo, .nNavbar__Toggle {
        display: none;
      }
    }
  }
  &__Icons {
    &__Link, &__Link:active, &__Link:visited {
      display: block;
      padding-top: 5px;
      margin-left: 20px;
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
    &__Logo, &__Logo--hidden {
      width: auto;
      flex-grow: 0;
    }
    &__Menu {
      flex-grow: 1;
      justify-content: flex-start;
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
          font-size: 13px;
          transform: none;
          padding-top: 3px;
          color: $color_vue_blue;
          &:not(:last-child) {
            margin-bottom: 0;
            margin-right: 40px;
          }
        }
      }
    }
    &__Search {
      &__Input {
        height: 40px;
      }
    }
    &__Icons {
      justify-content: flex-end;
      &__Link {
        &:nth-child(2), &:nth-child(3) {
          display: block;
        }
      }
    }
  }
}
</style>
