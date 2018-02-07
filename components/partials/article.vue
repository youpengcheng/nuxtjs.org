<template>
  <article class="nArticle">
    <slot/>
  </article>
</template>

<style lang="scss">
@import '~assets/variables';

.nArticle {
  padding: 20px 0;
  @media (min-width: 992px) {
    padding: 30px 0;
    padding-left: 30px;
  }
}
</style>
