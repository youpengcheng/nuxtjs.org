<template>
  <div class="nTopbar__Translations" :class="{'nTopbar__Translations--open': showTranslations}">
    <div class="nTopbar__Translations__Toggle" @click="$emit('update:showTranslations', false)">
      <n-icon-x/>
    </div>
    <ul class="nTopbar__Translations__List">
      <li class="nTopbar__Translations__List__Item" v-for="t in translations" :key="t.locale" v-if="t.locale !== $store.getters.get('locale')">
        <a :href="t.url" class="nTopbar__Translations__List__Item__Link">
          {{ t.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import nIconX from '@/components/icons/times'

export default {
  props: {
    showTranslations: {
      type: Boolean,
      required: true
    }
  },
  components: {
    nIconX
  },
  data () {
    return {
      translations: [
        { locale: 'en', name: 'English', url: 'https://nuxtjs.org' },
        { locale: 'fr', name: 'Français', url: 'https://fr.nuxtjs.org' },
        { locale: 'id', name: 'Indonesia', url: 'https://id.nuxtjs.org' },
        { locale: 'ja', name: '日本語', url: 'https://ja.nuxtjs.org' },
        { locale: 'ko', name: '한국어', url: 'https://ko.nuxtjs.org' },
        { locale: 'ru', name: 'Русский', url: 'https://ru.nuxtjs.org' },
        { locale: 'zh', name: '中文', url: 'https://zh.nuxtjs.org' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~assets/colors';

.nTopbar__Translations {
  background: $color_vue_green;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0.75s;
  &__Toggle {
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    .Icon--times {
      width: 32px;
      height: 32px;
    }
  }
  &__List {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    &__Item {
      transform: translateX(1000px);
      transition: transform 0.75s ease-in-out;
      &:nth-child(1) { transition-delay: 0.1s; }
      &:nth-child(2) { transition-delay: 0.2s; }
      &:nth-child(3) { transition-delay: 0.3s; }
      &:nth-child(4) { transition-delay: 0.4s; }
      &:nth-child(5) { transition-delay: 0.5s; }
      &:nth-child(6) { transition-delay: 0.6s; }
      &:not(:last-child) {
        margin-bottom: 40px;
      }
      &__Link {
        font-size: 20px;
        color: #fff;
        padding: 5px;
        transition: color 0.25s;
        &:hover {
          color: $color_vue_blue;
        }
      }
    }
  }
  &--open {
    transform: translateX(0px);
    transition-delay: 0s;
    .nTopbar__Translations__List__Item {
      transform: translateX(0px);
    }
  }
}
@media (min-width: 992px) {
}
</style>
