<template>
  <div class="nContainer">
    <slot/>
  </div>
</template>

<style lang="scss">
.nContainer {
  display: flex;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: 576px) {
    // max-width: 576px;
  }
  @media (min-width: 768px) {
    padding: 0;
    width: 728px;
  }
  @media (min-width: 992px) {
    //  max-width: 992px;
  }
  @media (min-width: 1088px) {
    width: 100%;
    padding: 0 180px;
    margin: 0;
  }
  @media (min-width: 1200px) {
    // max-width: 840px;
  }
}
</style>
