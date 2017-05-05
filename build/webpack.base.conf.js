var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var buildPath = require('../config/build-path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  cache: true,
  context: buildPath.ROOT_PATH,
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [buildPath.APP_PATH, buildPath.MODULE_PATH],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': buildPath.ASSETS_PATH,
      'components': buildPath.COMPONENT_PATH,
      'style': buildPath.STYLE_PATH,
      'lib': buildPath.LIB_PATH
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          useEslintrc: true,
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        include: buildPath.APP_PATH,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: buildPath.APP_PATH,
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        include: buildPath.APP_PATH,
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
