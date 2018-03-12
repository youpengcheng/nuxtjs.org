<template>
  <div class="test">
    <div class="test--left"></div>
  </div>
</template>

<script>
export default {
  layout: 'test'
}
</script>

<style lang="scss">
@import '~assets/colors';

.test {
  padding-top: 72px;
  &--left {
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 0 10px $color_silver inset;
    background-color: #F5F7FA;
  }
}
</style>
