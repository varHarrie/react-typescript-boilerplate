const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./base.config')

const root = path.resolve(__dirname, '..')

module.exports = merge(baseConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'index.html')
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
})
