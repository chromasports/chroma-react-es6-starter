var express = require('express');
var path = require('path');
var npmCheck = require('npm-check');
var cors = require('cors');
var bodyparser = require('body-parser');

var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 3000));
app.disable('x-powered-by');

app.get('/', function(req, res) {
  res.json({ status: 200 });
});

app.post('/npm-check', function(req, res) {

  // TODO: Make the path dynamic... maybe we will need to allow the user to
  // upload their package.json?
  var options = {
    path: req.body.path
  };

  npmCheck(options)
    .then(function(result) {
      res.json({
        status: 200,
        data: result
      });
    });

});

app.listen(8081)
