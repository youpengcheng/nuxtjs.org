<template>
  <aside class="nAside" v-if="menu">
    <div class="nAside__Group" v-for="group in menu.links" :key="group.title">
      <p>{{ group.title }}</p>
      <ul class="nAside__Group__Menu">
        <li v-for="link in group.links" :key="link.name">
          <nuxt-link :to="`/${$route.params.section}${link.to}`">{{ link.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    menu () {
      return this.$store.getters.get('menu')[this.$route.params.section] || null
    }
  }
}
</script>

<style lang="scss">
@import '~assets/variables';

.nAside {
  color: #fff;
  width: 100%;
  padding-top: 30px;
  @media (min-width: 992px) {
    float: left;
    width: 240px;
  }
  &__Group {
    p {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: lighten($color_vue_blue, 30%);
    }
    &__Menu {
      list-style: none;
      padding: 10px 0;
      padding-bottom: 30px;
      li {
        padding: 4px 0;
        a {
          position: relative;
          display: inline-block;
          font-size: 15px;
          padding: 3px 0;
          text-decoration: none;
          color: lighten($color_vue_blue, 10%);
          &:hover {
            color: $color_vue_green;
          }
        }
        .nuxt-link-exact-active {
          font-weight: 600;
          color: $color_vue_green;
        }
      }
    }
  }
}
</style>
