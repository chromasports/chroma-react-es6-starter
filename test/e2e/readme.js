module.exports = {
  'Test readme' : function (browser) {
    browser
      .url('https://www.github.com/chromasports/chroma-react-es6-starter')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#readme', 'Installing')
      .assert.containsText('#readme', 'Running')
      .assert.containsText('#readme', 'Testing')
      .end();
  }
};
