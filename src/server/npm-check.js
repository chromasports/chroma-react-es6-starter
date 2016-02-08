var express = require('express');
var Router = express.Router();

Router.get('/', function(req, res) {
  res.json({ status: 200, message: 'api online' });
});

Router.get('/:name/:repo', function(req, res) {
  // github style url shortcut for the below proposed functionality.
  res.json({
    status: 200,
    message: 'api online',
    user: req.params.name,
    repo: req.params.repo
  });
});

module.exports = Router;
