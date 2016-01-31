import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
// import jsdom from 'node-jsdom';

// test globals
global.expect = expect;
global.sinon = sinon;
chai.use(sinonChai);

// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = global.document.defaultView;
global.console.debug = function() {}
global.__DEV__ = (process.env.NODE_ENV !== "production");
global.environment = process.env.NODE_ENV;
global.navigator = {userAgent: 'Chrome'};

// ensure requiring css not to throw
require.extensions['.css'] = function () {
  return null;
};
