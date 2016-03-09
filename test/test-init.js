import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdom from 'node-jsdom';

chai.use(sinonChai);

// make available globally so we dont have to explicitly import
// in each test
global.expect = expect;
global.sinon = sinon;

// shim dom and various expected objects and functions
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.self = window;
global.navigator = {userAgent: 'Chrome'};
global.console.debug = function() {}

// shim environment variables
global.__DEV__ = (process.env.NODE_ENV !== "production");
global.environment = process.env.NODE_ENV;

// ensure requiring css not to throw
require.extensions['.css'] = function () {
  return null;
};
