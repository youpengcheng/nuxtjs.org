<template>
  <div class="nTopbar__Menu" :class="{'nTopbar__Menu--open': showMenu}">
    <div class="nTopbar__Menu__Toggle" @click="$emit('update:showMenu', false)">
      <n-icon-x/>
    </div>
    <ul class="nTopbar__Menu__List">
      <li class="nTopbar__Menu__List__Item">
        <nuxt-link to="/guide" class="nTopbar__Menu__List__Item__Link">
          Guide
        </nuxt-link>
      </li>
      <li class="nTopbar__Menu__List__Item">
        <nuxt-link to="/api" class="nTopbar__Menu__List__Item__Link">
          API
        </nuxt-link>
      </li>
      <li class="nTopbar__Menu__List__Item">
        <nuxt-link to="/resources" class="nTopbar__Menu__List__Item__Link">
          Resources
        </nuxt-link>
      </li>
      <li class="nTopbar__Menu__List__Item">
        <nuxt-link to="/ecosystem" class="nTopbar__Menu__List__Item__Link">
          Ecosystem
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import nIconX from '@/components/icons/times'

export default {
  props: {
    showMenu: {
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

.nTopbar__Menu {
  background: $color_vue_blue;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 995;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-100%);
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0.75s;
  &__Toggle {
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    .Icon--times {
      width: 32px;
      height: 32px;
    }
  }
  &__List {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    &__Item {
      color: #fff;
      cursor: pointer;
      transform: translateX(-1000px);
      transition: transform 0.5s ease-in-out;
      &__Link {
        font-size: 20px;
        color: #fff;
        padding: 5px;
        transition: color 0.25s;
        &:hover {
          color: $color_vue_green;
        }
      }
      .nuxt-link-active {
        color: $color_vue_green;
      }
      &:nth-child(1) { transition-delay: 0.1s; }
      &:nth-child(2) { transition-delay: 0.2s; }
      &:nth-child(3) { transition-delay: 0.3s; }
      &:nth-child(4) { transition-delay: 0.4s; }
      &:nth-child(5) { transition-delay: 0.5s; }
      &:not(:last-child) {
        margin-bottom: 40px;
      }
    }
  }
  &--open {
    transform: translateX(0px);
    transition-delay: 0s;
    .nTopbar__Menu__List__Item {
      transform: translateX(0px);
    }
  }
}
</style>
