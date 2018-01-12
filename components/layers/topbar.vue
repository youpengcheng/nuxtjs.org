<template>
  <div class="topbar">
    <n-container>
      <slot/>
    </n-container>
  </div>
</template>

<script>
import nContainer from '@/components/layers/container.vue'

export default {
  components: {
    nContainer
  }
}
</script>

<style lang="scss">
@import '~assets/scss/colors';

.topbar {
  background-color: #fff;
  box-shadow: 0 1px 1px $color_silver;
}
</style>
