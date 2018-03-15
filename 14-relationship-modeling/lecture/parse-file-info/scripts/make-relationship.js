const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/better');

const Song = require('../models/song');
const Artist = require('../models/artist');

let weirdAl = new Artist({name: 'Weird Al'});
let yoda = new Song({
  title: 'Yoda',
  duration: 200,
  artist: weirdAl
});

Promise.all([
  Song.remove(),
  Artist.remove()
])
.then(() => {
  return Promise.all([
    weirdAl.save(),
    yoda.save()
  ]);
})
.then(docs => {
  let artist = docs[0];
  let song = docs[1];
  console.log('artist', artist);
  console.log('song', song);

  return Song.find({title: 'Yoda'});
})
.then(song => {
  console.log('Found w/o populate:', song);
  return Song.findOne({title: 'Yoda'});
})
.then(song => {
  // grab the artist id stored on the song
  console.log('ID:', song.artist);
  
  return Artist.findById(song.artist)
  .then(artist => {
    console.log('  Song:', song.title);
    console.log('Artist:', artist.name);
    console.log('song.artist:', song.artist);
  });
})
.then(() => {
  return Song.find({title: 'Yoda'})
  .populate('artist');
})
.then(song => {
  console.log('Found w/  populate:', song);
})
.catch(err => {
  console.log('Error creating artist and song:', err.message);
  mongoose.disconnect();
});
