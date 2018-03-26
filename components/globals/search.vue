<template>
  <div class="nSearch" :class="{'nSearch--open': showSearch}">
    <div class="nSearch__Toggle" @click="$emit('update:showSearch', false)">
      <n-icon-x/>
    </div>
    <n-container>
      <div class="nSearch__Content">
        <h1>Search</h1>
        <input type="text" class="nSearch__Content__Input" name="search" id="algolia" placeholder="What do you need?"/>
      </div>
    </n-container>
  </div>
</template>

<script>
let scriptInjected = false
let callbacks = []
let onScriptLoaded = (cb) => callbacks.push(cb)
let scriptLoaded = () => callbacks.forEach((cb) => cb())

import nIconX from '@/components/icons/times'
import nContainer from '@/components/globals/container.vue'

export default {
  props: {
    showSearch: {
      type: Boolean,
      required: true
    }
  },
  components: {
    nIconX,
    nContainer
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

.nSearch {
  background: $color_nuxt_green;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  // align-items: center;
  transform: translateX(100%);
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
  &__Toggle {
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    .Icon--times {
      width: 32px;
      height: 32px;
    }
  }
  &__Content {
    width: 100%;
    // transform: translateX(1000px);
    // transition: transform 0.75s ease-in-out;
    // &:nth-child(1) { transition-delay: 0.1s; }
    // &:nth-child(2) { transition-delay: 0.2s; }
    h1 {
      font-weight: 200;
      font-size: 52px;
      color: #fff;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin: 64px 0;
    }
    &__Input {
      display: block;
      height: 48px;
      font-size: 18px;
      color: #fff;
      background-color: lighten($color_nuxt_green, 10%);
      border: none;
      border-radius: 60px;
      width: 100%;
      padding: 0 20px;
      outline: none;
      &::placeholder {
        font-size: 18px;
        color: #fff;
        // text-align: center;
      }
    }
  }
  &--open {
    transform: translateX(0px);
    transition-delay: 0s;
    .nSearch__Content {
      transform: translateX(0px);
    }
  }
}
@media (min-width: 992px) {
}
</style>
