import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import paths from './paths'
import rules from './rules'

module.exports = {
  entry: paths.entryPath,
  module: {
    rules,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'public' }],
    }),
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      favicon: paths.favicon,
      assets: {
        publicPath: paths.publicPath,
      },
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
}
