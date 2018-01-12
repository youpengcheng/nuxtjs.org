<template>
  <div class="category">
    <n-header>header</n-header>
    <n-topbar>topbar</n-topbar>
    <n-container class="category__content">
      <n-affix/>
      <n-article>
        <pre>{{ list }}</pre>
        <nuxt-child/>
      </n-article>
    </n-container>
    <!-- <nuxt-affix :list="list" category="guide" /> -->
    <!-- <div class="category__content Content Content--hasCarbon" :class="{'category__content--hidden': visible}">
      <nuxt-child/>
    </div> -->
    <!-- <div class="category__footer">
      <nuxt-footer/>
    </div> -->
  </div>
</template>

<script>
import nHeader from '@/components/layers/header.vue'
import nTopbar from '@/components/layers/topbar.vue'
import nContainer from '@/components/layers/container.vue'
import nArticle from '@/components/layers/article.vue'
import nAffix from '@/components/layers/affix.vue'

import NuxtAffix from '~/components/Affix.vue'
import NuxtFooter from '~/components/Footer.vue'

export default {
  components: {
    NuxtAffix,
    NuxtFooter,
    nHeader,
    nTopbar,
    nContainer,
    nArticle,
    nAffix
  },
  computed: {
    visible() { return this.$store.state.visibleAffix },
    list() { return this.$store.state.menu.guide }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/colors';
.category {
  &__content {
    padding: 30px 0;
  }
}
</style>
