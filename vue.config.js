const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const noMock = process.env.NODE_ENV === 'production' || process.env.NOMOCK === 'true'

module.exports = {
  runtimeCompiler: true,
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/scss/main.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@api-mock': noMock ? resolve('src/empty') : resolve('src/api-mock'),
        'axios-mock-adapter': noMock ? resolve('src/empty') : 'axios-mock-adapter/dist/axios-mock-adapter.min.js'
      }
    },
    entry: {
      app: '@/main.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api/': {
        target: 'http://localhost:8082',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|ico)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
  }
}
