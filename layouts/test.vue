<template>
  <div class="device">
    <n-navbar/>
    <div class="device__header">
      <div @click="showMenu = true">
        <icon-menu/>
      </div>
    </div>
    <nuxt/>
    <div class="menu" :class="{'menu-open': showMenu}">
      <div @click="showMenu = false">
        <icon-x/>
      </div>
      <div class="nav">
        <div class="nav__item"></div>
        <div class="nav__item"></div>
        <div class="nav__item"></div>
        <div class="nav__item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import nNavbar from '@/components/commons/navbar'
import iconX from '@/components/icons/x'
import iconMenu from '@/components/icons/menu'

export default {
  components: {
    nNavbar,
    iconX,
    iconMenu
  },
  data () {
    return {
      showMenu: false
    }
  }
}
</script>


<style lang="scss">
@import '~assets/variables';

$bg-color: #f1f5ff;

$color-white: #fff;
$color-blue: #7097F1;
$color-blue-dark: #2760E4;
$color-blue-light: #cfdeff;

.device {
  .feather {
    color: $color-white;
    cursor: pointer;
  }

  &__header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $color-blue;
    padding-left: 10px;
    padding-right: 10px;
  }
}

.menu {
  background: $color_vue_green;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-100%);
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-delay: .5s;
  .nav {
    &__item {
      width: 160px;
      height: 20px;
      background: #fff;
      transform: translateX(-500px);
      transition-property: transform;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      &:nth-child(1) { transition-delay: 0.2s; }
      &:nth-child(2) { transition-delay: 0.3s; }
      &:nth-child(3) { transition-delay: 0.4s; }
      &:nth-child(4) { transition-delay: 0.5s; }
      &:not(:last-child) {
        margin-bottom: 40px;
      }
    }
  }
  .feather {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  &-open {
    transform: translateX(0px);
    transition-delay: 0s;
    .nav__item {
      transform: translateX(0px);
    }
  }
}
</style>
