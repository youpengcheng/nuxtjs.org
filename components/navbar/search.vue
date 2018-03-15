<template>
  <div class="nNavbar__Search" :class="{'nNavbar__Search--open': visible}">
    <input type="text" class="nNavbar__Search__Input" name="search" id="algolia" placeholder="Search"/>
  </div>
</template>

<script>
let scriptInjected = false
let callbacks = []
let onScriptLoaded = (cb) => callbacks.push(cb)
let scriptLoaded = () => callbacks.forEach((cb) => cb())

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    }
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

.nNavbar__Search {
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
    box-shadow: 0 0 1px $color_silver inset;
    width: 100%;
    padding: 0 17px;
    outline: none;
    &::placeholder {
      font-size: 14px;
      color: $color_vue_silver;
    }
  }
  &--open {
    flex-grow: 1;
    width: 100%;
    padding-left: 20px;
    overflow: visible;
    .nNavbar__Logo, .nNavbar__Toggle {
      display: none;
    }
  }
}
@media (min-width: 992px) {
  .nNavbar__Search {
    &__Input {
      height: 40px;
    }
    &--open {
      padding-left: 0;
    }
  }
}
</style>
