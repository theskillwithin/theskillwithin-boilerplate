import { CleanWebpackPlugin } from 'clean-webpack-plugin'

import paths from './paths'

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[chunkhash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'source-map',
}
