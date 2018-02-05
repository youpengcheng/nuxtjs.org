<template>
  <aside class="nAside">
    <div class="nAside__Container">
      <ul class="nAside__Container__Menu">
        <li>
          Test
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss">
@import '~assets/variables';

.nAside {
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
  &__Container {
    width: 100%;
    padding: 30px 10px;
    // background-color: rgba(255, 255, 255, 0.5);
    @media (min-width: 768px) {
      padding: 30px 15px;
    }
    @media (min-width: 992px) {
      float: right;
      width: 300px;
    }
    &__Menu {
      list-style: none;
      padding: 0;
      li {
        font-size: 15px;
        color: $color_nuxt_silver;
      }
    }
  }
}
</style>
