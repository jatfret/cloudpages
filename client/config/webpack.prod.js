const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    home: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['css-loader','less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.resolve(process.cwd(), 'src'),
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.resolve(process.cwd(), 'src')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.join(process.cwd(), "dist")),
    new HtmlWebpackPlugin({
      title: 'F.Luo',
      template: path.join(process.cwd(), 'src/index.html')
    })
  ],
  devtool: 'source-map'
}
