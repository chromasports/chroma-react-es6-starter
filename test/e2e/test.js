var package = require('../../package.json');
var expect = require('chai').expect;

module.exports = {
  'Test npm-check' : function (browser) {
    var numberOfDependencies = Object.keys(package.dependencies).length + Object.keys(package.devDependencies).length

    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body', 1000)
      .assert.containsText('header', 'Chroma React ESNext Toolkit')
      .click('.npm-check-form button')
      .waitForElementVisible('.npm-check-dependency', 15000)
      .elements('css selector', '.npm-check-dependency', function(r) {
        browser.expect(r.value.length).to.equal(numberOfDependencies)
      });

    browser.end()
  }
};
