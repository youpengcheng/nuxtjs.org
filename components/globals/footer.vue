<template>
  <footer class="nFooter">
    <div class="nFooter__Decoration">
      <span class="nFooter__Decoration--lg"></span>
      <span class="nFooter__Decoration--sm"></span>
      <span class="nFooter__Decoration--sm"></span>
      <span class="nFooter__Decoration--md"></span>
      <span class="nFooter__Decoration--xs"></span>
      <span class="nFooter__Decoration--sm"></span>
      <span class="nFooter__Decoration--md"></span>
      <span class="nFooter__Decoration--xs"></span>
      <span class="nFooter__Decoration--sm"></span>
      <span class="nFooter__Decoration--lg"></span>
      <span class="nFooter__Decoration--md"></span>
      <span class="nFooter__Decoration--sm"></span>
    </div>
  </footer>
</template>

<style lang="scss">
@import '~assets/colors';

.nFooter {
  position: relative;
  margin-top: 80px;
  background-color: $color_vue_blue;
  min-height: 200px;
  &__Decoration {
    &--xs {
      top: -45px;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 45px solid transparent;
    }
    &--sm {
      top: -60px;
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      border-bottom: 60px solid transparent;
    }
    &--md {
      top: -90px;
      border-left: 60px solid transparent;
      border-right: 60px solid transparent;
      border-bottom: 90px solid transparent;
    }
    &--lg {
      top: -120px;
      border-left: 80px solid transparent;
      border-right: 80px solid transparent;
      border-bottom: 120px solid transparent;
    }
    span {
      width: 0;
      height: 0;
      position: absolute;
      &:nth-child(1) { left: 0; }
      &:nth-child(2) { left: 40px; }
      &:nth-child(3) { left: calc(20% - 40px); }
      &:nth-child(4) { left: calc(33% - 40px); }
      &:nth-child(5) { left: calc(33% - 10px); }
      &:nth-child(6) { right: calc(50% - 40px); }
      &:nth-child(7) { right: calc(33% - 40px); }
      &:nth-child(8) { right: calc(33% - 10px); }
      &:nth-child(9) { right: calc(20% - 40px); }
      &:nth-child(10) { right: 0; }
      &:nth-child(11) { right: 80px; }
      &:nth-child(12) { right: 80px; }
      &:nth-child(1), &:nth-child(3), &:nth-child(8), &:nth-child(10) { border-bottom-color: $color_vue_green; }
      &:nth-child(2), &:nth-child(4), &:nth-child(6), &:nth-child(12) { border-bottom-color: $color_vue_blue; }
      &:nth-child(5), &:nth-child(7), &:nth-child(9), &:nth-child(11) { border-bottom-color: $color_nuxt_green; }
    }
  }
}
</style>
