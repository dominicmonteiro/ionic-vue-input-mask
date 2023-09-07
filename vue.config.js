const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  configureWebpack: {
    output: {
      library: 'ionic-vue-input-mask',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
  },
})
