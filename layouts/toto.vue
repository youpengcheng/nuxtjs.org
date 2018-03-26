<template>
  <div class="nApp">
    <div class="Decoration">
      <span class="t triangle--vue"></span>
      <span class="Navigation__Circle" style="left: 100px;background-color:#42b883;">
        <n-icon-bars/>
      </span>
      <!-- <span class="t triangle"></span>
      <span class="t triangle--small"></span>
      <div class="Navigation">
        <span class="Navigation__Circle">
          <n-icon-bars/>
        </span>
        <n-icon-gh/>
        <n-icon-search/>
        <n-icon-globe/>
        <n-logo/>
      </div> -->
    </div>
    <div class="Decoration">
      <!-- <span class="t triangle--vue"></span> -->
      <span class="t triangle--vue-blue"></span>
      <span class="Navigation__Circle">
        <n-icon-bars/>
      </span>
      <!-- <span class="t triangle"></span>
      <span class="t triangle--small"></span>
      <div class="Navigation">
        <span class="Navigation__Circle">
          <n-icon-bars/>
        </span>
        <n-icon-gh/>
        <n-icon-search/>
        <n-icon-globe/>
        <n-logo/>
      </div> -->
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -9" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <!-- <div class="Header">
      <div class="Container">
        <h1>Documentation</h1>
        <p>Description concernant la documentation</p>
        <div class="Menu">
          <nuxt-link class="Menu__Link" to="/prologue">Prologue</nuxt-link>
          <nuxt-link class="Menu__Link" to="/guide">Guide</nuxt-link>
          <nuxt-link class="Menu__Link" to="/api">Api</nuxt-link>
        </div>
      </div>
    </div> -->
    <div class="Container">
      <nuxt/>
    </div>
    <!-- <div class="Footer">
      <div class="Footer__Decoration">
        <span class="t triangle--vue"></span>
        <span class="t triangle--vue-blue"></span>
        <span class="t triangle--one"></span>
        <span class="t triangle--two"></span>
        <span class="t triangle--three"></span>
        <span class="t triangle--four"></span>
        <span class="t triangle--five"></span>
        <span class="t triangle--six"></span>
        <span class="t triangle--seven"></span>
        <span class="t triangle"></span>
        <span class="t triangle--medium"></span>
        <span class="t triangle--small"></span>
      </div>
      <div class="Container">
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa, accusantium quia praesentium, quo, adipisci beatae fuga accusamus sequi rem qui libero est laborum aliquam unde repellendus ducimus molestiae neque?</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import nLogo from '~/components/svg/nuxtjs'
import nIconGh from '@/components/icons/github'
import nIconGlobe from '@/components/icons/globe'
import nIconBars from '@/components/icons/bars'
import nIconSearch from '@/components/icons/search'

export default {
  components: {
    nLogo,
    nIconGh,
    nIconGlobe,
    nIconBars,
    nIconSearch
  }
}
</script>

<style lang="scss">
@import '~assets/colors';

.nApp {
  width: 100%;
  overflow: hidden;
  .Decorate {
    z-index: 1;
    position: absolute;
    top : 0;
    left: 0;
    right: 0;
    filter:url("#goo");
  }
  .Navigation {
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: 24px 30px;
    .NuxtJS {
      height: 36px;
    }
    &__Circle {
      position: fixed;
      top: 4px;
      left: 20px;
      width: 60px;
      height: 60px;
      padding-top: 17px;
      background-color: $color_vue_blue;
      border-radius: 64px;
      cursor: pointer;
      float: left;
    }
    .Icon {
      color: #fff;
      opacity: .75;
      width: 30px;
      height: 30px;
      &:hover {
        opacity: 1;
      }
    }
    .Icon--search, .Icon--globe {
      float: right;
    }
    .Icon--search, .Icon--gh {
      margin-left: 56px;
    }
  }
  .Decoration {
    z-index: 1;
    position: absolute;
    top : 0;
    left: 0;
    right: 0;
    filter:url("#goo");
    .t {
      top: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
    .triangle--vue {
      left: 0;
      border-right: 200px solid transparent;
      border-top: 300px solid #42b883;
    }
    .triangle--vue-blue {
      left: 0;
      border-right: 120px solid transparent;
      border-top: 180px solid #35495e;
    }
    .triangle {
      right: 0;
      border-left: 200px solid transparent;
      border-top: 300px solid #42b883;
    }
    .triangle--small {
      right: 0;
      border-left: 120px solid transparent;
      border-top: 180px solid #3C8171;
    }
  }
  .Container {
    width: 100%;
    padding: 40px 200px;
  }
  .Header {
    text-align: center;
    height: 400px;
    padding-top: 120px;
    background-color: #fff;
    // box-shadow: 0 0 5px #DAE1E9;
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
    .Menu {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      margin-top: 60px;
      &__Link {
        height: 42px;
        min-width: 160px;
        display: flex;
        font-weight: 600;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        color: $color_vue_silver;
        text-transform: uppercase;
        border: 1px solid $color_vue_silver;
        transition: 1s color, background-color;
        transition: color, backgroundColor 0.5s ease-in-out;
        &:first-child {
          border-top-left-radius: 42px;
          border-bottom-left-radius: 42px;
        }
        &:last-child {
          border-top-right-radius: 42px;
          border-bottom-right-radius: 42px;
        }
        &:not(:first-child) {
          border-left: 0px;
        }
      }
      .nuxt-link-active {
        color: #fff;
        background-color: $color_vue_silver;
      }
    }
  }
  .Footer {
    position: relative;
    margin-top: 80px;
    background-color: #2c3e50;
    &__Decoration {
      .t {
        width: 0;
        height: 0;
        position: absolute;
      }
      .triangle--vue {
        left: 0;
        top: -120px;
        border-left: 80px solid transparent;
        border-right: 80px solid transparent;
        border-bottom: 120px solid #42b883;
      }
      .triangle--vue-blue {
        left: 40px;
        top: -60px;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 60px solid #35495e;
      }
      .triangle--one {
        left: calc(33% - 40px);
        top: -90px;
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-bottom: 90px solid #3C8171;
      }
      .triangle--two {
        left: calc(33% - 10px);
        top: -45px;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 45px solid #42b883;
      }
      .triangle--three {
        left: calc(20% - 40px);
        top: -60px;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 60px solid #35495e;
      }
      .triangle--four {
        right: calc(33% - 40px);
        top: -90px;
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-bottom: 90px solid #35495e;
      }
      .triangle--five {
        right: calc(33% - 10px);
        top: -45px;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 45px solid #3C8171;
      }
      .triangle--six {
        right: calc(20% - 40px);
        top: -60px;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 60px solid #42b883;
      }
      .triangle--seven {
        right: calc(50% - 40px);
        top: -60px;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 60px solid #3C8171;
      }
      .triangle {
        right: 0;
        top: -120px;
        border-left: 80px solid transparent;
        border-right: 80px solid transparent;
        border-bottom: 120px solid #42b883;
      }
      .triangle--medium {
        right: 80px;
        top: -90px;
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-bottom: 90px solid #3C8171;
      }
      .triangle--small {
        right: 80px;
        top: -60px;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 60px solid #35495e;
      }
    }
    h3 {
      color: #7F8C90;
    }
    p {
      color: #DAE1E9;
    }
  }
}
</style>
