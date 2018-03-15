const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  duration: {type: Number, min: 0},
  title: String,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  }
});

const Song = mongoose.model('Song', SongSchema);
module.exports = Song;