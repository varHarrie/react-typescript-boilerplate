const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./base.config')

const root = path.resolve(__dirname, '..')

module.exports = merge(baseConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(root, 'src/index.tsx')
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8080,
    publicPath: '/',
    contentBase: path.resolve(root, 'dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'index.html')
    })
  ]
})
