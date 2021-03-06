// server/server.js

'use strict';

// Declare all variables
var express = require('express');
var app = express();
var server;

// Require all the things
require('./routes')(app, express);

server = app.listen(3000, function () {
  console.log('DnD-Space listening at http://localhost:3000');
});
