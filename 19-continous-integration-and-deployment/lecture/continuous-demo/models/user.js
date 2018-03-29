const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: String,
  email: String,
  passwordHash: String
});

User.pre('save', function(next) {
  if (this.isNew) {
    console.log('New user', this);
  } else {
    console.log('old user', this);
  }
  next();
});

module.exports = mongoose.model('User', User);