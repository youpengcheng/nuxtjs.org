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
  }
}
</script>

<style lang="scss">
</style>
