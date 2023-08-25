<template>
  <div class="app">
    <AppNav />
      <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppNav from '@/layout/AppNav.vue'
import AppFooter from '@/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNav,
    AppFooter
  }
}
</script>
