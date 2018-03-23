<template>
  <div class="nContainer">
    <slot/>
  </div>
</template>

<style lang="scss">
.nContainer {
  display: flex;
  width: 100%;
  @media (min-width: 576px) {
    // max-width: 576px;
  }
  @media (min-width: 768px) {
//    max-width: 768px;
    // padding: 0 15px;
  }
  @media (min-width: 992px) {
    padding: 0 180px;
  }
  @media (min-width: 1200px) {
    // width: 1200px;
  }
}
</style>
