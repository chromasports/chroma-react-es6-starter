// hook babel - from this point onwards we can use esNEXT syntax :D
require('babel-core/register');
require("babel-polyfill");

// require the webpack client dev server
require('./tasks/webpack/dev-server');
