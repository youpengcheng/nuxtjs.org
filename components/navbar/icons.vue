<template>
  <div class="nNavbar__Icons">
    <a class="nNavbar__Icons__Link" href="https://github.com/nuxt" target="_blank">
      <n-icon-github/>
    </a>
    <a class="nNavbar__Icons__Link" href="https://twitter.com/nuxt_js" target="_blank">
      <n-icon-twitter/>
    </a>
    <a class="nNavbar__Icons__Link" href="#" @click.prevent="$emit('update:showSearch', !showSearch)">
      <n-icon-x v-if="showSearch"/>
      <n-icon-search v-else/>
    </a>
  </div>
</template>

<script>
import nIconX from '@/components/icons/times'
import nIconSearch from '@/components/icons/search'
import nIconTwitter from '@/components/icons/twitter'
import nIconGithub from '@/components/icons/github'

export default {
  props: {
    showSearch: {
      type: Boolean,
      required: true
    }
  },
  components: {
    nIconX,
    nIconSearch,
    nIconTwitter,
    nIconGithub
  }
}
</script>

<style lang="scss">
@import '~assets/colors';

.nNavbar__Icons {
  display: flex;
  justify-content: center;
  align-items: center;
  &__Link, &__Link:active, &__Link:visited {
    display: block;
    padding-top: 5px;
    color: lighten($color_vue_blue, 10%);
    &:hover {
      color: $color_vue_green;
    }
    &:nth-child(1), &:nth-child(2) { display: none; }
  }
}
@media (min-width: 992px) {
  .nNavbar__Icons {
    padding-top: 2px;
    &__Link {
      margin-right: 20px;
      &:nth-child(1), &:nth-child(2) {
        display: block;
      }
    }
  }
}
</style>
