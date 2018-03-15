const mongoose = require('mongoose');
const Song = require('./song');

const ArtistSchema = new mongoose.Schema({
  name: String,
});

ArtistSchema.methods.getSongs = function() {
  return Song.find({artistId: this._id});
};

const Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;
