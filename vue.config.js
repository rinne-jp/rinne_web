const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: "https://docs.google.com"
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  }
})
