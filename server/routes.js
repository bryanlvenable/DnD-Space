// server/routes.js

'use strict';

module.exports = function(app) {
  // Default routes
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};