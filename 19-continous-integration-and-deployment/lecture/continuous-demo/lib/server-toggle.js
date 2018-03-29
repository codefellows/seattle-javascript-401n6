'use strict';

const mongoose = require('mongoose');

module.exports = exports = {};

const PORT = process.env.PORT || 3000;
exports.serverOn = function(server, done) {
  if (!server.isRunning) {
    server.listen(PORT, () => {
      server.isRunning = true;
      console.log('server up!');
      done();
    });
    return;
  }
  done();
}

exports.serverOff = function(server, done) {
  if (server.isRunning) {
    server.close( err => {
      if (err) return done(err);
      server.isRunning = false;
      mongoose.connection.close();
      console.log('server down!');
      done();
    });
    return;
  }
  done();
}
