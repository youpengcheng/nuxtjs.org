<template>
  <div class="nNavbar__Menu" :class="{'nNavbar__Menu--open': showMenu}">
    <div class="nNavbar__Menu__Toggle" @click="$emit('update:showMenu', false)">
      <n-icon-x/>
    </div>
    <ul class="nNavbar__Menu__List">
      <li class="nNavbar__Menu__List__Item">
        <nuxt-link to="/guide" class="nNavbar__Menu__List__Item__Link">
          Guide
        </nuxt-link>
      </li>
      <li class="nNavbar__Menu__List__Item">
        <nuxt-link to="/api" class="nNavbar__Menu__List__Item__Link">
          API
        </nuxt-link>
      </li>
      <li class="nNavbar__Menu__List__Item">
        <nuxt-link to="/resources" class="nNavbar__Menu__List__Item__Link">
          Resources
        </nuxt-link>
      </li>
      <li class="nNavbar__Menu__List__Item">
        <nuxt-link to="/ecosystem" class="nNavbar__Menu__List__Item__Link">
          Ecosystem
        </nuxt-link>
      </li>
      <li class="nNavbar__Menu__List__Item" @click="$emit('update:showTranslations', true)">
        <span class="nNavbar__Menu__List__Item__Link">
          Translations
        </span>
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
    },
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

.nNavbar__Menu {
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
      cursor: pointer;
      transform: translateX(-500px);
      transition: transform 0.5s ease-in-out;
      &__Link {
        color: #fff;
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
    .nNavbar__Menu__List__Item {
      transform: translateX(0px);
    }
  }
}
@media (min-width: 992px) {
  .nNavbar__Menu {
    flex-grow: 1;
    justify-content: flex-end;
    position: relative;
    background: #fff;
    transform: none;
    padding-left: 30px;
    &__Toggle {
      display: none;
    }
    &__List {
      height: 100%;
      align-items: center;
      flex-direction: row;
      &__Item {
        font-size: 15px;
        transform: none;
        padding-top: 3px;
        text-transform: none;
        cursor: pointer;
        &__Link {
          color: $color_vue_blue;
        }
        &:not(:last-child) {
          margin-bottom: 0;
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
