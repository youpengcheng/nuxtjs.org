<template>
  <div class="nNavbar__Logo" :class="{'nNavbar__Logo--hidden': hidden}">
    <nuxt-link to="/" class="nNavbar__Logo__Link">
      <n-logo/>
    </nuxt-link>
  </div>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs'

export default {
  props: {
    hidden: {
      type: Boolean,
      required: true
    }
  },
  components: {
    nLogo
  }
}
</script>

<style lang="scss">
@import '~assets/colors';

.nNavbar__Logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  transition-property: width, flex-grow;
  transition-duration: 0.5s;
  &__Link {
    width: 115px;
    height: 28px;
    overflow: hidden;
    display: block;
    .NuxtJS {
      height: 26px;
    }
  }
  &--hidden {
    width: 0;
  }
}
@media (min-width: 992px) {
  .nNavbar__Logo, .nNavbar__Logo--hidden {
    width: auto;
    flex-grow: 0;
    padding-right: 40px;
    &__Link {
      margin-bottom: 3px;
    }
  }
}
</style>
