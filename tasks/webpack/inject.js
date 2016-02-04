var fs = require('fs');
var path = require('path');

module.exports = function inject () {

  this.plugin("done", function (stats) {

    var replaceInFile = function (filePath, toReplace, replacement) {
      var replacer = function (match) {
        console.log('Replacing in %s: %s => %s', filePath, match, replacement);
        return replacement;
      };
      var str = fs.readFileSync(filePath, 'utf8');
      var out = str.replace(new RegExp(toReplace, 'g'), replacer);
      fs.writeFileSync(filePath, out);
    };

    var hash = stats.hash; // Build's hash, found in `stats` since build lifecycle is done.

    replaceInFile(path.join(path.join(__dirname, '..', '..', 'dist'), 'index.html'),
        'bundle.js',
        'bundle.' + hash + '.js'
    );

    replaceInFile(path.join(path.join(__dirname, '..', '..', 'dist'), 'index.html'),
        'bundle.css',
        'bundle.' + hash + '.css'
    );

  });

}
