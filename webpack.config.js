var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var inject = require('./tasks/webpack/inject');
var hotPort = 8000;

var isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: (isDev) ? 'eval' : 'source-map',
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src/client/index.js'),
  ].concat(isDev ? [
    'webpack-dev-server/client?http://localhost:' + hotPort,
    'webpack/hot/dev-server'
  ] : []),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: isDev ? 'bundle.js' : 'bundle.[hash].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin(isDev ? 'bundle.css' : 'bundle.[hash].css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__DEV__': JSON.stringify(isDev),
      'environment': JSON.stringify(process.env.NODE_ENV),
    }),
  ].concat(isDev ? []: [
    inject
  ]),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.css$/, // Only .css files
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  _hotPort: hotPort
};
