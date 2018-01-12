<template>
  <header class="header">
    <n-container>
      <slot/>
    </n-container>
  </header>
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
.header {
  background-color: #fff;
}
</style>
