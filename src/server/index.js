var express = require('express');
var path = require('path');
var npmCheck = require('npm-check');
var cors = require('cors');
var bodyparser = require('body-parser');

var exec = require('child_process').exec;

var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 3000));
app.disable('x-powered-by');

app.get('/', function(req, res) {
  res.json({ status: 200, message: 'api online' });
});

app.get('/:name/:repo', function(req, res) {});

app.post('/npm-check/', function(req, res) {

  // FIRST AND FOREMOST WE SHOULD VALIDATE THE PACKAGEDOTJSON AND POTENTIALLY
  // REMOVE POSTINSTALLS AS THESE COULD BE MALICIOUS - THAT BEING SAID NPM 3 WILL HELP
  // EXPLICITLY DEFINING ALL CHILD DEPENDENCIES WILL BECOME A MUST

  // TODO: Make the path dynamic... maybe we will need to allow the user to
  // upload their package.json?
  // in the case a user uplodads a packagedotjson then we should
  // create a temp directory move the upload file into this directory.
  // cd into the directory and run an npm install.
  // run npm-check on the directory and return success
  var path = undefined;

  // at this point we should do something like check if its a github repo
  // if its a github repo then setup a temp directory and try to clone the repo
  // cd into the repo and try to run an npm install
  // if this fails then delete the temp directory and send a failure message
  // else we should run npm check against the newly installed directory
  // and return a success response with the data returned from npm-check
  // if your up for it and would like to implement, please feel free!
  // maybe we should create adapters for different source control? LOL ANYWAYYYYYY....

  var options = {
    path: (path) ? path : req.body.path
  };

  npmCheck(options)
    .then(function(result) {
      res.json({
        status: 200,
        data: result
      });
    });

});

// update the dependency
app.put('/dependecy/:id', function(req, res) {});
// uninstall the dependency
app.delete('/dependecy/:id', function(req, res) {});

app.listen(8081, function() {
  console.log('server listening on port: 8081');
});
