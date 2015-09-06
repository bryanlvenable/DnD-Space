// server/routes.js

'use strict';

module.exports = function(app) {
  // Catch all other routes and send to index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile('index.html', { "root": 'client' });
    });
};