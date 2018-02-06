<template>
  <aside class="nAside">
    <ul class="nAside__Menu">
      <li>
        Test
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
@import '~assets/variables';

.nAside {
  width: 100%;
  padding: 20px 0;
  @media (min-width: 992px) {
    float: left;
    padding: 30px 0;
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
</style>
