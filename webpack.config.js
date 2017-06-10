const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractSvgPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: ['transform-class-properties'],
        }
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src')],
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'payment-icons.svg',
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'constants' : path.resolve(__dirname, 'src/constants'),
      'styles'    : path.resolve(__dirname, 'src/styles'),
    }
  },
  devtool: 'source-map',
  context: __dirname,
  devServer: {
    port: 8080,
    publicPath: '/assets/',
    historyApiFallback: true,
    hot: true,
    overlay: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      __STRIPE_PUBLISHABLE_KEY__: JSON.stringify('pk_test_523fe2f2eg2e2e2g2dfw'),
    }),
    new ExtractTextPlugin('styles.css'),
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractSvgPlugin(),
  ]
};