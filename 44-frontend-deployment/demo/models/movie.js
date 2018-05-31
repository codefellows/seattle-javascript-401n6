const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
});

module.exports = mongoose.model('Movie', MovieSchema);

