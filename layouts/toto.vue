<template>
  <div class="nApp">
    <div class="Decoration">
      <span class="t triangle--vue"></span>
      <span class="t triangle--vue-blue"></span>
      <span class="t triangle"></span>
      <span class="t triangle--small"></span>
    </div>
    <div class="Navigation">
      <n-icon-bars/>
      <n-icon-search/>
      <n-logo/>
    </div>
    <div class="Header">
      <h1>Documentation</h1>
      <p>Description concernant la documentation</p>
    </div>
    <nuxt/>
  </div>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs'
import nIconBars from '@/components/icons/bars'
import nIconSearch from '@/components/icons/search'

export default {
  components: {
    nLogo,
    nIconBars,
    nIconSearch
  }
}
</script>

<style lang="scss">
.nApp {
  width: 100%;
  overflow: hidden;
  .Navigation {
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: 24px 30px;
    .NuxtJS {
      height: 36px;
    }
    .Icon {
      float: left;
      color: #fff;
      width: 32px;
      height: 32px;
    }
    .Icon--search {
      float: right;
    }
  }
  .Decoration {
    z-index: 1;
    position: absolute;
    top : 0;
    left: 0;
    right: 0;
    .t {
      top: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
    .triangle--vue {
      left: 0;
      border-right: 240px solid transparent;
      border-top: 360px solid #42b883;
    }
    .triangle--vue-blue {
      left: 0;
      border-right: 120px solid transparent;
      border-top: 180px solid #35495e;
    }
    .triangle {
      right: 0;
      border-left: 240px solid transparent;
      border-top: 360px solid #42b883;
    }
    .triangle--small {
      right: 0;
      border-left: 120px solid transparent;
      border-top: 180px solid #3C8171;
    }
  }
  .Header {
    text-align: center;
    height: 480px;
    padding-top: 160px;
    background-color: #fff;
    box-shadow: 0 0 5px #DAE1E9;
    h1 {
      margin: 0;
      padding-bottom: 20px;
      font-size: 56px;
      line-height: 64px;
      font-weight: 200;
      color: #2c3e50;
    }
    p {
      font-size: 22px;
      color: #7F8C90;
      font-weight: 300;
    }
  }
}
</style>
