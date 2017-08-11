var webpack = require('webpack')
module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'vue-sessionstorage.min.js',
    library: 'VueSessionStorage',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}