<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4" @mouseover="focus" @mouseleave="blur">
      <nui-article>
        <h1>Learn Nuxt<span class="text-nuxt-lightgreen">JS</span></h1>
        <div class="flex flex-wrap -mx-2">
          <div v-for="section of results" :key="section.path" class="w-full md:w-1/2 xl:w-1/3 p-2">
            <div class="h-full bg-white rounded-lg p-4 shadow cursor-pointer hover:shadow-xl">
              <img class="h-16 md:h-24 rounded-full mx-auto" :src="section.attrs.image || `https://github.com/Atinux.png`">
              <h2 class="text-lg font-semibold my-2">
                {{ section.attrs.title }}
              </h2>
              <div class="text-gray-600 text-sm">
                {{ section.attrs.description }}
              </div>
            </div>
          </div>
        </div>
        <contribute :doc-link="docLink" />
      </nui-article>
    </div>
    <nui-affix class="opacity-transition" :class="{ 'opacity-25': $store.state.focusMode }">
      <nui-ads :key="$route.params.slug" class="mx-auto" />
    </nui-affix>
  </div>
</template>

<script>
import nuiAds from '@/components/partials/Ads'
import nuiAffix from '@/components/partials/Affix'

export default {
  components: {
    nuiAds,
    nuiAffix
  },
  computed: {
    docLink () {
      return `https://github.com/nuxt/docs/blob/master${this.file}`
    }
  },
  asyncData ({ app, $content }) {
    return $content(`/${app.i18n.locale}/learn?fields=attrs`)
  },
  methods: {
    focus () {
      if (this._timeout) {
        return
      }
      this._timeout = setTimeout(() => this.$store.commit('setFocusMode', true), 1300)
    },
    blur () {
      if (this._timeout) {
        clearTimeout(this._timeout)
        delete this._timeout
      }
      this.$store.commit('setFocusMode', false)
    }
  },
  scrollToTop: true,
  head () {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - NuxtJS',
      meta: [
        { hid: 'description', name: 'description', content: this.attrs.description }
      ]
    }
  }
}
</script>

<style scoped>
article h2::before {
  height: 3px;
  top: 1.6rem;
}
</style>
