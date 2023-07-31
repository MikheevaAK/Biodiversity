<template>
  <div class="main">
    <AppHeader />
    <AppMain />
    <AppFooter />
    <AppNav />
  </div>
</template>

<script>
import AppNav from '@/layout/AppNav.vue'
import AppHeader from '@/layout/AppHeader.vue'
import AppMain from '@/layout/AppMain.vue'
import AppFooter from '@/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNav,
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>
