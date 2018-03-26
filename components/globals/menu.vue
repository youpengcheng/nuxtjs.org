<template>
  <div class="nMenu" :class="{'nMenu--open': showMenu}">
    <div class="nMenu__Toggle" @click="$emit('update:showMenu', false)">
      <n-icon-x/>
    </div>
    <n-container>
      <div class="nMenu__Content">
        <h1>Menu</h1>
        <div class="nMenu__Content__Nav">
          <div class="nMenu__Content__Nav__List">
            <h2>Learn</h2>
            <nuxt-link to="/guide" class="nMenu__Content__Nav__List__Link">
              Guide
            </nuxt-link>
            <nuxt-link to="/api" class="nMenu__Content__Nav__List__Link">
              API
            </nuxt-link>
            <nuxt-link to="/faq" class="nMenu__Content__Nav__List__Link">
              FAQ
            </nuxt-link>
          </div>
          <div class="nMenu__Content__Nav__List">
            <h2>Resources</h2>
            <nuxt-link to="/examples" class="nMenu__Content__Nav__List__Link">
              Examples
            </nuxt-link>
            <nuxt-link to="/modules" class="nMenu__Content__Nav__List__Link">
              Modules
            </nuxt-link>
            <nuxt-link to="/templates" class="nMenu__Content__Nav__List__Link">
              Templates
            </nuxt-link>
          </div>
          <div class="nMenu__Content__Nav__List">
            <h2>Ecosystem</h2>
            <nuxt-link to="/support-us" class="nMenu__Content__Nav__List__Link">
              Support Us
            </nuxt-link>
            <nuxt-link to="/api" class="nMenu__Content__Nav__List__Link">
              Social Network
            </nuxt-link>
            <nuxt-link to="/faq" class="nMenu__Content__Nav__List__Link">
              Community
            </nuxt-link>
          </div>
        </div>
      </div>
    </n-container>
  </div>
</template>

<script>
import nIconX from '@/components/icons/times'
import nContainer from '@/components/globals/container.vue'

export default {
  props: {
    showMenu: {
      type: Boolean,
      required: true
    }
  },
  components: {
    nIconX,
    nContainer
  }
}
</script>

<style lang="scss">
@import '~assets/colors';

.nMenu {
  background: $color_vue_blue;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 995;
  display: flex;
  justify-content: center;
  // align-items: center;
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
  &__Content {
    width: 100%;
    h1 {
      font-weight: 200;
      font-size: 52px;
      color: #fff;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      margin: 64px 0;
    }
    &__Nav {
      display: flex;
      justify-content: space-around;
      &__List {
        display: flex;
        flex-direction: column;
        h2 {
          font-weight: 400;
          font-size: 24px;
          text-transform: uppercase;
          color: $color_soft_blue;
        }
        &__Link {
          color: #fff;
          font-size: 20px;
          margin-top: 40px;
          text-align: center;
        }
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
    }
  }
  &--open {
    transform: translateX(0px);
    transition-delay: 0s;
    .nMenu__List__Item {
      transform: translateX(0px);
    }
  }
}
</style>
