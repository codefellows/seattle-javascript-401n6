const mongoose = require('mongoose');

module.exports = mongoose.model('Polaroid', new mongoose.Schema({
  url: String,
}));