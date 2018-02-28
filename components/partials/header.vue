<template>
  <header class="nHeader">
    <n-container>
      <div class="nHeader__Sponsor">
        <img src="https://user-images.githubusercontent.com/1016365/34124854-48fafa06-e3e9-11e7-8c04-251055feebee.png" alt="Tipe.io">
      </div>
      <h1>{{ menu.title }}</h1>
      <p>{{ menu.description }}</p>
    </n-container>
  </header>
</template>

<script>
import nContainer from '~/components/globals/container.vue'

export default {
  components: {
    nContainer
  },
  computed: {
    menu () {
      return this.$store.getters.get('menu')[this.$route.params.section]
    }
  }
}
</script>

<style lang="scss">
@import '~assets/variables';

.nHeader {
  color: #fff;
  margin-top: 76px;
  padding: 80px 0;
  // display: flex;
  // align-content: center;
  background-color: $color_nuxt_green;
  background-image: linear-gradient(73deg, $color_nuxt_green, $color_vue_green);
  h1 {
    font-weight: 400;
    font-size: 42px;
  }
  p {

  }
  &__Sponsor {
    display: block;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    padding: 20px;
    width: 320px;
    float: right;
    img {
      height: 80px;
      display: block;
      float: left;
    }
  }
}
</style>
