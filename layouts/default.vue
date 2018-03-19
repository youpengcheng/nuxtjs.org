<template>
  <div class="nApp">
    <n-navbar/>
    <nuxt/>
  </div>
</template>

<script>
import nNavbar from '@/components/globals/topbar'

export default {
  components: {
    nNavbar
  }
}
</script>

<style lang="scss">
// .nApp {
//   padding-top: 64px;
//   @media (min-width: 992px) {
//     padding-top: 72px;
//   }
// }
</style>
