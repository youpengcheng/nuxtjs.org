<template>
  <div>
    <n-header/>
    <n-navbar/>
    <nuxt-child/>
  </div>
</template>

<script>
import nHeader from '~/components/partials/header.vue'
import nNavbar from '~/components/partials/navbar.vue'

export default {
  components: {
    nHeader,
    nNavbar
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
