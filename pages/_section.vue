<template>
  <div>
    <n-header/>
    <n-nav/>
    <n-container>
      <nuxt-child/>
    </n-container>
  </div>
</template>

<script>
import nContainer from '@/components/globals/container.vue'
import nHeader from '@/components/globals/header.vue'
import nNav from '@/components/globals/nav.vue'

export default {
  components: {
    nContainer,
    nHeader,
    nNav
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
    // console.log('scroll Y')
    // console.log(window.pageYOffset)
    // console.log('affix')
    // console.log(this.$refs.affix.getBoundingClientRect())
    // console.log(this.affix)
    }
  }
}
</script>

<style lang="scss">
</style>
