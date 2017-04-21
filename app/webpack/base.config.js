const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = {
  entry: path.resolve(root, 'src/index.tsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(root, 'src'),
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
