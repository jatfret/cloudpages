'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const commonWebpackConfig = require('./webpack.common.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entries = Object.keys(commonWebpackConfig.entry)
const htmlPlugin = []

entries.forEach(function (name) {
  htmlPlugin.push(new HtmlWebpackPlugin({
    title: name,
    template: 'index.html',
    filename: `${name}/index.html`,
    chunks: [`${name}`],
    inject: true
  }))
  // add hot-reload related code to entry chunks
  commonWebpackConfig.entry[name] = ['./build/dev-client'].concat(commonWebpackConfig.entry[name])
})

module.exports = merge(commonWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ].concat(htmlPlugin)
})
