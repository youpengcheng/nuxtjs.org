<template>
  <nav class="Affix" ref="affix" :class="{'Affix--fixed': fixed}">
    <ul class="Affix__Menu">
      <li v-for="link in links" :key="link.url" class="Affix__Menu__Item">
        <nuxt-link :to="link.url" class="Affix__Menu__Item__Link">
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
    <div class="Affix__Bottom" ref="carbonads"></div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { url: '/guide/prologue', name: 'Introduction' },
        { url: '/guide/prologue/core-concepts', name: 'Core concepts' },
        { url: '/guide/prologue/releases-notes', name: 'Releases Notes' },
        { url: '/guide/prologue/contribution-guide', name: 'Contribution guide' }
      ]
    }
  },
  computed: {
    fixed () {
      return this.$store.getters.navbarFixed
    }
  },
  mounted () {
    if (this.$store.state.locale === 'en') {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg')
      script.setAttribute('id', '_carbonads_js')
      this.$refs.carbonads.appendChild(script)
    }
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // Faire detection du bas avec des grosses data et footer
      //      console.log('scroll Y')
      //      console.log(window.pageYOffset)
      //      console.log('affix')
      //      console.log(this.$refs.affix.getBoundingClientRect())
      //      console.log(this.affix)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/colors';

.Affix {
  position: absolute;
  @media (min-width: 992px) {
    width: 240px;
  }
  &--fixed {
    position: fixed;
    top: 64px;
  }
  &__Menu {
    list-style: none;
    padding: 0;
    padding-bottom: 15px;
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
    &__Item {
      padding-bottom: 15px;
      &__Link {
        display: block;
        color: $color_soft_grey;
        font-size: 15px;
        padding-bottom: 5px;
        padding-right: 5px;
        &:hover {
          color: $color_soft_black;
        }
      }
      .nuxt-link-exact-active {
        color: $color_soft_black;
        font-weight: 500;
      }
    }
  }
  &__Bottom {
    .carbon-img {
      display: inline-block;
      margin-right: 10px;
      @media (min-width: 625px) {
        float: none;
        margin-right: 0;
      }
    }
    // .carbon-text {
    //   color: #34495e;
    //   text-decoration: none;
    //   &:hover {
    //     text-decoration: none;
    //   }
    //   @media (min-width: 625px) {
    //     display: inline-block;
    //     margin-top: 5px;
    //   }
    // }
    // .carbon-wrap {
    //   @media (min-width: 625px) {
    //     display: inline-block;
    //     margin-bottom: 5px;
    //     line-height: normal;
    //   }
    // }
    .carbon-poweredby {
      color: #7f8c8d;
      display: block;
    }
  }
}
</style>
