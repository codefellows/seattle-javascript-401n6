const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  name: {type: String, unique: true}
});

const Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;