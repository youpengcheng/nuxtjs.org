<template>
  <nav class="nNav">
    <nuxt-link class="nNav__Link" to="/prologue">Prologue</nuxt-link>
    <nuxt-link class="nNav__Link" to="/guide">Guide</nuxt-link>
    <nuxt-link class="nNav__Link" to="/api">Api</nuxt-link>
  </nav>
</template>

<style lang="scss">
@import '~assets/colors';

.nNav {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 80px;
  &__Link {
    height: 42px;
    min-width: 160px;
    display: flex;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    color: $color_nuxt_green;
    text-transform: uppercase;
    border: 1px solid $color_nuxt_green;
    transition: 1s color, background-color;
    transition: color, backgroundColor 0.5s ease-in-out;
    &:first-child {
      border-top-left-radius: 42px;
      border-bottom-left-radius: 42px;
    }
    &:last-child {
      border-top-right-radius: 42px;
      border-bottom-right-radius: 42px;
    }
    &:not(:first-child) {
      border-left: 0px;
    }
  }
  .nuxt-link-active {
    color: #fff;
    background-color: $color_nuxt_green;
  }
}
</style>
