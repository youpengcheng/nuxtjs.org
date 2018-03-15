<template>
  <div class="nNavbar__Toggle" :class="{'nNavbar__Toggle--hidden': hidden}" @click="$emit('update:showMenu', true)">
    <n-icon-menu/>
  </div>
</template>

<script>
import nIconMenu from '@/components/icons/bars'

export default {
  props: {
    hidden: {
      type: Boolean,
      required: true
    },
    showMenu : {
      type: Boolean,
      required: true
    }
  },
  components: {
    nIconMenu
  }
}
</script>

<style lang="scss">
@import '~assets/colors';

.nNavbar__Toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  cursor: pointer;
  color: $color_vue_blue;
  transition-property: width;
  transition-duration: 0.5s;
  &:hover {
    color: $color_vue_green;
  }
  &--hidden {
    width: 0;
  }
}
@media (min-width: 992px) {
  .nNavbar__Toggle {
    display: none;
  }
}
</style>
