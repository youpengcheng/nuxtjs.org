<template>
  <article class="article">
    <div class="article__content">
      <slot/>
    </div>
    <div class="article__footer">
      Previous - Edit this page on Github - Next
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '~assets/scss/colors';

.article {
  background-color: #fff;
  box-shadow: 0 2px 3px $color_silver;
  @media (min-width: 992px) {
    margin-left: 240px;
  }
  &__content {
    padding: 30px;
    h1 {
      font-size: 28px;
      font-weight: 300;
      margin-bottom: 30px;
    }
    p {
      margin-bottom: 15px;
      line-height: 22px;
    }
  }
  &__footer {
    padding: 20px 30px;
    border-top: 1px solid $color_silver;
  }
}
</style>
