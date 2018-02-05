<template>
  <footer class="nFooter">
    <n-container>
      Footer
    </n-container>
  </footer>
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

.nFooter {
  background-color: #fff;
  box-shadow: 0 -1px 1px $color_silver;
}
</style>
