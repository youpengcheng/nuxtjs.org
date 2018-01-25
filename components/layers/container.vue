<template>
  <div class="container">
    <slot/>
  </div>
</template>

<style lang="scss">
.container {
  width: 85%;
  max-width: 1000px;
  margin: 0 auto;
  &:before, &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
}
</style>
