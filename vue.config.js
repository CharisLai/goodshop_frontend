// import { defineConfig } from 'vite'
// const path = require('path')

// module.exports = defineConfig({
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src')
//     }
//   },
//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'less',
//       patterns: [
//         // 自動引入的文件 使用絕對路徑
//         path.join(__dirname, './src/assets/styles/variables.less'),
//         path.join(__dirname, './src/assets/styles/mixins.less')
//       ]
//     }
//   }
// }) 


import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    {
      name: 'style-resources-loader',
      plugin: require('style-resources-loader'),
      options: {
        preProcessor: 'less',
        patterns: [
          // 自動引入的文件 使用絕對路徑
          path.resolve(__dirname, './src/assets/styles/variables.less'),
          path.resolve(__dirname, './src/assets/styles/mixins.less')
        ]
      }
    }
  ]
})