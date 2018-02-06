<template>
  <div class="nContainer">
    <slot/>
  </div>
</template>

<style lang="scss">
.nContainer {
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
    width: 992px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
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
