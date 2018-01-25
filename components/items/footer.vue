<template>
  <n-footer>
    <n-container>
      <div class="nuxtFooter">
        footer
      </div>
    </n-container>
  </n-footer>
</template>

<script>
import nFooter from '@/components/layers/footer.vue'
import nContainer from '@/components/layers/container.vue'

export default {
  components: {
    nFooter,
    nContainer
  }
}
</script>

<style lang="scss">
@import '~assets/scss/colors';
</style>
