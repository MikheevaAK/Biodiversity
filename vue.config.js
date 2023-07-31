const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "src/assets/scss/main.scss";`
      }
    }
  }
})


