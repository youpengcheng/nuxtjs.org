<template>
  <nav class="nTopbar">
    <n-container>
      <ul class="nTopbar__Menu">
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ t('learn') }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <nuxt-link to="/guide">{{ t('guide') }}</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <nuxt-link to="/api">{{ t('api') }}</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <nuxt-link to="/examples">{{ t('examples') }}</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <nuxt-link to="/faq">{{ t('faq') }}</nuxt-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ t('resources') }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <nuxt-link to="/guide">{{ t('guide') }}</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <nuxt-link to="/api">{{ t('api') }}</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <nuxt-link to="/examples">{{ t('examples') }}</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <nuxt-link to="/faq">{{ t('faq') }}</nuxt-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ t('translations') }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <nuxt-link to="/guide">{{ t('guide') }}</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <nuxt-link to="/api">{{ t('api') }}</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <nuxt-link to="/examples">{{ t('examples') }}</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <nuxt-link to="/faq">{{ t('faq') }}</nuxt-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </n-container>
    <!-- ElementUI Dropdown -->
    <!-- ElementUI Autocomplete -->
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import nContainer from '~/components/globals/container.vue'

export default {
  components: {
    nContainer
  },
  computed: {
    ...mapGetters(['t'])
  }
}
</script>

<style lang="scss">
@import '~assets/variables';

.nTopbar {
  height: 64px;
  background-color: #fff;
  &__Menu {
    height: 64px;
    float: right;
    list-style: none;
    li {
      float: left;
      padding-left: 30px;
      padding-top: 23px;
      height: 64px;
      .el-dropdown, a {
        cursor: pointer;
        color: $color_vue_blue;
        padding: 5px;
        font-size: 15px;
        display: inline-block;
      }
    }
  }
}
</style>
