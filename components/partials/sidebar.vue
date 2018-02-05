<template>
  <div class="nSidebar">
    <nav class="nSidebar__Menu">
      salut
    </nav>
  </div>
</template>

<style lang="scss">
@import '~assets/variables';

.nSidebar {
  height: 100vh;
  width: 100%;
  // padding: 0 10px;
  transition: width 1s;
  background-color: $color_vue_blue;
  @media (min-width: 768px) {
    // padding: 0 15px;
  }
  @media (min-width: 992px) {
    width: calc(((100% - 992px) / 2) + 300px);
  }
  @media (min-width: 1200px) {
    width: calc(((100% - 1200px) / 2) + 300px);
  }
  &__Menu {
    width: 100%;
    padding: 0 10px;
    background-color: rgba(255, 255, 255, 0.5);
    @media (min-width: 992px) {
      float: right;
      width: 300px;
      padding: 0 15px;
    }
  }
}
</style>
