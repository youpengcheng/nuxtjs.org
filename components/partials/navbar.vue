<template>
  <nav class="nNavbar">
    <!-- ElementUI Autocomplete -->
    <n-container>
      <p>Navbar</p>
    </n-container>
  </nav>
</template>

<script>
import nContainer from '~/components/globals/container.vue'

export default {
  components: {
    nContainer
  }
}
</script>

<style lang="scss">
@import '~assets/variables';

.nNavbar {
  height: 64px;
  background-color: #fff;
  box-shadow: 0 1px 1px $color_silver;
  // border-bottom: 1px solid $color_silver;
}
</style>
