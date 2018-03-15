const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  duration: {type: Number, min: 0},
  title: String,
  artistId: mongoose.Schema.Types.ObjectId
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
