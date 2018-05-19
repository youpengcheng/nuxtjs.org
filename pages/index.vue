<template>
  <main class="nDoc">
    <header class="nDoc__Header">
      <div id="codefund_ad"></div>
    </header>
    <section class="nDoc__Section">
      <div class="nDoc__Section__Bloc nDoc__Section__Bloc--left">
        <svg class="nDoc__Section__Bloc__Triangle" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,100"></polygon>
        </svg>
        <svg class="nDoc__Section__Bloc__Line" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100"/>
        </svg>
        <aside class="">
          Menu
        </aside>
      </div>
      <div class="nDoc__Section__Bloc">
        <svg class="nDoc__Section__Bloc__Triangle" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 0,100"></polygon>
        </svg>
        <svg class="nDoc__Section__Bloc__Line" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="0" y1="100" x2="100" y2="0"/>
        </svg>
        <article>
          Article
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima culpa rem voluptatibus magnam ducimus exercitationem aspernatur corrupti nihil, atque quibusdam? Dolores aperiam quisquam, id pariatur sapiente cumque dignissimos odio ad.
        </article>
      </div>
    </section>

    <!-- <h3>Lang</h3>
    <pre>{{ $store.getters.get('lang') }}</pre>
    <h3>Menu</h3>
    <pre>{{ $store.getters.get('menu') }}</pre> -->
  </main>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // }
}
</script>

<style lang="scss">
.nDoc {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  &__Header {
    width: 100%;
    height: 300px;
    background-color: #fff;
    position: relative;
    z-index: 97;
  }
  &__Section {
    width: 100%;
    display: flex;
    margin-top: -1px;
    justify-content: center;
    &__Bloc {
      display: flex;
      flex-grow: 1;
      position: relative;
      padding-top: 64px;
      background-color: #fff;
      &--left {
        justify-content: flex-end;
        background-color: #F5F7FA;
      }
      aside, article {
        height: 600px;
        padding: 20px;
      }
      aside {
        width: 280px;
        border-right: 1px solid #DAE1E9;
      }
      article {
        width: 760px;
        padding-bottom: 128px;
      }
      &__Triangle, &__Line {
        display: block;
        width: 100%;
        height: 64px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
      }
      &__Triangle {
        fill: #fff;
      }
      &__Line {
        top: 1px;
        z-index: 80;
        stroke: #DAE1E9;
        stroke-width: 1px;
      }
    }
  }
}
</style>
