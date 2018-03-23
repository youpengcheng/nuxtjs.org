<template>
  <article class="nArticle" v-html="content"></article>
</template>

<script>
export default {
  props: ['content'],
  mounted() {
    this.addListeners()
  },
  beforeDestroy() {
    this.removeListeners()
  },
  watch: {
    'content': 'contentUpdated'
  },
  methods: {
    navigate(event) {
      const href = event.target.getAttribute('href')
      if (href && href[0] === '/') {
        event.preventDefault()
        this.$router.push(href)
      }
    },
    contentUpdated() {
      this.removeListeners()
      this.$nextTick(() => {
        this.addListeners()
      })
    },
    addListeners() {
      this._links = this.$el.getElementsByTagName('a')
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].addEventListener('click', this.navigate, false)
      }
    },
    removeListeners() {
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].removeEventListener('click', this.navigate, false)
      }
      this._links = []
    }
  }
}
</script>

<style lang="scss">
@import '~assets/variables';

.nArticle {
  width: 100%;
  // @media (min-width: 992px) {
  //   max-width: 500px;
  // }
  // @media (min-width: 1200px) {
  //   max-width: 700px;
  // }
  // @media (min-width: 992px) {
  //   max-width: 992px;
  // }
  // @media (min-width: 1200px) {
  //   max-width: 1200px;
  // }
  @import '~assets/article';
}
</style>
