const nodeExternals = require('webpack-node-externals')
const baseWebpackConfig = require('../build/webpack.base.conf')
const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  externals: [nodeExternals()],
  devtool: 'inline-cheap-module-source-map',
})
