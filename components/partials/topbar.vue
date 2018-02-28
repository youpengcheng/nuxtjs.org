<template>
  <nav class="nTopbar">
    <n-container>
      <nuxt-link to="/" class="nTopbar__Logo">
        <n-logo/>
      </nuxt-link>
      <ul class="nTopbar__Menu">
        <li>
          <nuxt-link to="/guide/introduction">Documentation</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/resources/modules">Resources</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/community/suuport-us">Community</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/translations">Translations</nuxt-link>
        </li>
      </ul>
    </n-container>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import nLogo from '~/components/svg/nuxtjs.vue'
import nContainer from '~/components/globals/container.vue'

export default {
  components: {
    nLogo,
    nContainer
  },
  computed: {
    ...mapGetters(['t'])
  }
}
</script>

<style lang="scss">
@import '~assets/variables';

.nTopbar {
  height: 64px;
  background-color: #fff;
  &__Logo {
    display: block;
    margin-top: 10px;
    padding: 5px 0;
    float: left;
    .NuxtJS {
      height: 34px;
    }
  }
  &__Menu {
    height: 64px;
    float: right;
    list-style: none;
    li {
      float: left;
      padding-left: 45px;
      padding-top: 23px;
      height: 64px;
      a {
        cursor: pointer;
        color: $color_vue_blue;
        padding: 5px 0;
        font-size: 15px;
        display: inline-block;
      }
    }
  }
}
</style>
