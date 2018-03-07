<template>
  <div class="nNavbar">
    <div class="nNavbar__Logo">
      <nuxt-link to="/">
        <n-logo/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import nIconX from '@/components/icons/x'
import nIconMenu from '@/components/icons/menu'
import nLogo from '~/components/svg/nuxtjs.vue'

export default {
  components: {
    nLogo,
    nIconX,
    nIconMenu
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
  position: fixed;
  height: 72px;
  padding: 0 30px;
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
  &__Logo {
    display: flex;
    align-items: center;
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
}
</style>
