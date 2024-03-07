const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' },
      },
    },
  },
})
