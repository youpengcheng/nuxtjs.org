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
  height: 76px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 10px 40px 0 rgba(62,57,107,0.07), 0 2px 9px 0 rgba(62,57,107,0.06);
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
