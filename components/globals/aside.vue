<template>
  <aside class="nAside" v-if="menu">
    <div class="nAside__Group" v-for="(group, g) in menu.links" :key="group.title">
      <p @click="current = g">{{ group.title }}</p>
      <ul class="nAside__Group__Menu" v-show="current === g">
        <li v-for="link in group.links" :key="link.name">
          <nuxt-link :to="`/${$route.params.section}${link.to}`">{{ link.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      current: 0
    }
  },
  computed: {
    menu () {
      return this.$store.getters.get('menu')[this.$route.params.section] || null
    }
  }
}
</script>

<style lang="scss">
@import '~assets/colors';

.nAside {
  width: 100%;
  &__Group {
    p {
      cursor: pointer;
      font-size: 14px;
      font-weight: 400;
      padding: 20px 0;
      text-transform: uppercase;
      color: lighten($color_vue_blue, 10%);
      border-bottom: 1px dashed rgba(0,0,0,.1);
    }
    &__Menu {
      list-style: none;
      padding: 10px 0;
      padding-bottom: 30px;
      li {
        padding: 5px;
        a {
          position: relative;
          display: inline-block;
          font-size: 15px;
          padding: 5px;
          text-decoration: none;
          color: lighten($color_vue_blue, 25%);
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
