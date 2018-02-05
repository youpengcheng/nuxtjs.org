<template>
  <div>
    <n-topbar/>
    <nuxt/>
    <n-footer/>
  </div>
</template>

<script>
import nTopbar from '~/components/partials/topbar.vue'
import nFooter from '~/components/partials/footer.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    nTopbar,
    nFooter
  },
  computed: {
    ...mapGetters(['t'])
  }
}
</script>

<style lang="scss">
</style>
