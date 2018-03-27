const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: String
});

const Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;
