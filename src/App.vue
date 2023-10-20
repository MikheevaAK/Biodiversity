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
  data() {
    return {
      store: localStorage
    }
  },  
  components: {
    AppNav,
    AppFooter,
    PreloaderPage
  },
  mounted() {
    this.store.setItem(this.$route.path, true)
  },
  watch: {
        store: {
            handler() {
                console.log(1)
            },
            deep: true
        }
    },
}
</script>

<style>
.app {
  position: relative;
}
</style>
