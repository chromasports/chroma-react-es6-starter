module.exports = {
  'Test npm-check' : function (browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body', 1000)
      .assert.containsText('header', 'Chroma React ESNext Toolkit')
      .click('.npm-check-form button')
      .waitForElementVisible('.npm-check-dependency', 15000);

      browser.execute(function() {
        var dependencies = document.getElementsByClass('npm-check-dependency');

        dependencies.forEach(function(dependency) {
          console.log(dependency);
        });
      }, []);

      browser.end();
  }
};
