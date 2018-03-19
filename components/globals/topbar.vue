<template>
  <div class="nTopbar">
    <!-- <div class="nTopbar__Menu">
      <n-icon-bars/>
    </div> -->
    <svg class="nTopbar__Decoration">
      <polygon class="nTopbar__Decoration__Triangle--light-green" points="0 0,200 0,0 300"/>
      <polygon class="nTopbar__Decoration__Triangle--blue" points="0 0,120 0,0 180"/>
      <polygon class="nTopbar__Decoration__Triangle--light-green" points="0 0,200 0,200 300"/>
      <polygon class="nTopbar__Decoration__Triangle--green" points="0 0,120 0,120 180"/>
    </svg>
  </div>
</template>

<script>
import nIconBars from '@/components/icons/bars'

export default {
  components: {
    nIconBars
  }
}
</script>


<style lang="scss">
@import '~assets/colors';

.nTopbar {
  &__Decoration {
    width: 100%;
    height: 300px;
    &__Triangle {
      &--blue {
        fill: $color_vue_blue;
      }
      &--green {
        fill: $color_nuxt_green;
      }
      &--light-green {
        fill: $color_vue_green;
      }
    }
    // cursor: pointer;
    // color: $color_vue_silver;
    // fill: $color_vue_blue;
    // width: 120px;
    // height: 180px;

    // border-right: 120px solid transparent;
    // border-top: 180px solid #35495e;
    // right: 0;
    // left: 0;
    // bottom: 0;
    // z-index: 995;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // transform: translateX(-80%) rotate(30deg);
    // transform: rotate(20deg) translateX(-100%);
    // &:hover {
    //   color: #fff;
    //   fill: darken($color_vue_blue, 3%);
    // }
  }
}
</style>
