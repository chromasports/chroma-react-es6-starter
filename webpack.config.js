var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var hotPort = 8000;

var isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: (isDev) ? 'eval' : 'source-map',
  entry: [
    path.join(__dirname, 'src/index.js'),
  ].concat(isDev ? [
    'webpack-dev-server/client?http://localhost:' + hotPort,
    'webpack/hot/dev-server'
  ] : []),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
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
        loader: 'style!css' // Run both loaders
      }
    ]
  },
  _hotPort: hotPort
};
