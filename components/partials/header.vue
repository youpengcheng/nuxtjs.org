<template>
  <header class="nHeader">
    <n-container>
      <h1>Title</h1>
      <p>Description</p>
    </n-container>
  </header>
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
.nHeader {
  background-color: #fff;
}
</style>
