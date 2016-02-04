import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../webpack.config.js';

// additional webpack configuration for the dev server
const serverOptions = {
  publicPath: '/',
  contentBase: 'src/client',
  hot: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  },
  historyApiFallback: true
};

// instantiate the webpack dev server
const webpackDevServer = new WebpackDevServer(webpack(config), serverOptions);

// ensure the dev server is listening and serving on the port specified
webpackDevServer.listen(config._hotPort, function (err) {
  if (err) {
    throw err;
  }
  console.log('webpack dev server listening on %s', config._hotPort);
});
