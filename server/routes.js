// server/routes.js

'use strict';

module.exports = function (app, express) {
  // Catch all other routes and send to index.html
  // app.route('/*')
  //   .get(function (req, res) {
  //     res.sendFile('index.html', { "root": '../client' });
  //   });
  var router = express.Router();
  app.use(express.static(__dirname + '/../client'));
};

// var express = require('express');
// var router = express.Router();

// router.get('/', function (req, res) {
//   res.send('Hello World');
// });

// module.exports = router;