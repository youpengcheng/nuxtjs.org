<template>
  <header class="nHeader">
    <n-container>
      <h1>{{ menu.title }}</h1>
      <p>{{ menu.description }}</p>
    </n-container>
  </header>
</template>

<script>
import nContainer from '~/components/globals/container.vue'

export default {
  components: {
    nContainer
  },
  computed: {
    menu () {
      return this.$store.getters.get('menu')[this.$route.params.section]
    }
  }
}
</script>

<style lang="scss">
.nHeader {
  background-color: #fff;
}
</style>
