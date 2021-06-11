import webpack from 'webpack'
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin'

import paths from './paths'

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 20000000,
    maxEntrypointSize: 8500000,
    assetFilter: (assetFilename) => {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: paths.outputPath,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [new CaseSensitivePathsPlugin(), new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map',
}
