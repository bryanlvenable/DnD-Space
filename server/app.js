var express = require('express');
var app = express();

// Catch all other routes and send to index.html
app.get('/*', function (req, res) {
  res.sendfile('client/index.html');
});

var server = app.listen(3000, function () {
  console.log('DnD-Space listening at http://localhost:3000');
});

