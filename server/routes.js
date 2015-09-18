// server/routes.js

'use strict';

module.exports = function (app, express) {
  // Serve up client folder
  var router = express.Router();
  app.use('/', express.static(__dirname + '/../client'));
};