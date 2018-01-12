<template>
  <header class="Header">
    <n-container>
      <nuxt-link class="Header__Logo" to="/">
        <!-- <img src="~static/logo_nav.png" alt="Nuxt" /> -->
        <n-logo/>
        <h1 class="Header__Logo__Text">NUXT</h1>
      </nuxt-link>
    <!-- <div class="Header__Toggler">
      <div class="Header__Toggler__Button" @click="toggle">
        <div :class="{'icon menu': !visible, 'icon close': visible}"></div>
      </div>
    </div>
    <nuxt-header-nav/> -->
    </n-container>
  </header>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs.vue'
import nContainer from '~/components/layers/container.vue'
import NuxtHeaderNav from '~/components/HeaderNav.vue'

export default {
  computed: {
    visible() { return this.$store.state.visibleHeader }
  },
  methods: {
    toggle() { this.$store.commit('toggle', 'visibleHeader') }
  },
  components: {
    NuxtHeaderNav,
    nLogo,
    nContainer
  }
}
</script>

<style lang="scss" scoped>
.Header {
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 995;
  padding: 0 15px;
  display: flex;
  position: fixed;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #dbdfe1;
  @media (min-width: 991px) {
    height: 80px;
    padding: 0 30px;
  }
  &__Logo {
    display: flex;
    align-items: center;
    @media (min-width: 991px) {
      width: 189px;
      border-right: 1px solid #dbdfe1;
    }
    &__Text {
      margin: 0;
      width: 0;
      overflow: hidden;
    }
  }
  &__Toggler {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 991px) {
      display: none;
    }
    &__Button {
      display: flex;
      width: 25px;
      height: 20px;
      cursor: pointer;
    }
  }
}
</style>
