<template>
  <div class="app">
    <PreloaderPage  />
    <AppNav />
      <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppNav from '@/layout/AppNav.vue'
import AppFooter from '@/layout/AppFooter.vue'
import PreloaderPage from './layout/PreloaderPage.vue'

export default {
  name: 'App',
  components: {
    AppNav,
    AppFooter,
    PreloaderPage
  },
  mounted() {
    localStorage.setItem(this.$route.path, true)
  },
}
</script>

<style>
.app {
  position: relative;
}
</style>
