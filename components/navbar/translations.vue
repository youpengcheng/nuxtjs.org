<template>
  <div class="nNavbar__Translations" :class="{'nNavbar__Translations--open': showTranslations}">
    <div class="nNavbar__Translations__Toggle" @click="$emit('update:showTranslations', false)">
      <n-icon-x/>
    </div>
    <ul class="nNavbar__Translations__List">
      <li class="nNavbar__Translations__List__Item">English</li>
      <li class="nNavbar__Translations__List__Item">Français</li>
      <li class="nNavbar__Translations__List__Item">English</li>
      <li class="nNavbar__Translations__List__Item">Français</li>
      <li class="nNavbar__Translations__List__Item">English</li>
      <li class="nNavbar__Translations__List__Item">Français</li>
    </ul>
  </div>
</template>

<script>
import nIconX from '@/components/icons/times'

export default {
  props: {
    showTranslations: {
      type: Boolean,
      required: true
    }
  },
  components: {
    nIconX
  }
}
</script>

<style lang="scss">
@import '~assets/colors';

.nNavbar__Translations {
  background: $color_vue_green;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0.75s;
  &__Toggle {
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    .Icon--times {
      width: 24px;
      height: 24px;
    }
  }
  &__List {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    &__Item {
      color: #fff;
      font-size: 18px;
      transform: translateX(1000px);
      transition: transform 0.75s ease-in-out;
      &:nth-child(1) { transition-delay: 0.1s; }
      &:nth-child(2) { transition-delay: 0.2s; }
      &:nth-child(3) { transition-delay: 0.3s; }
      &:nth-child(4) { transition-delay: 0.4s; }
      &:nth-child(5) { transition-delay: 0.5s; }
      &:nth-child(6) { transition-delay: 0.6s; }
      &:not(:last-child) {
        margin-bottom: 40px;
      }
      &:hover {
        color: $color_vue_blue;
      }
    }
  }
  &--open {
    transform: translateX(0px);
    transition-delay: 0s;
    .nNavbar__Translations__List__Item {
      transform: translateX(0px);
    }
  }
}
@media (min-width: 992px) {
}
</style>
