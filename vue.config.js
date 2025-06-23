const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 2828 // <-- hier den gewünschten Port eintragen
  }
})
