const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  originalId: Number,
});

module.exports = mongoose.model('Movie', MovieSchema);