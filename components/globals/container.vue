<template>
  <div class="container">
    <slot/>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  @media (min-width: 576px) {
    // max-width: 576px;
  }
  @media (min-width: 768px) {
//    max-width: 768px;
    padding: 0 15px;
  }
  @media (min-width: 992px) {
    max-width: 992px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
  &:before, &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }
}
</style>
