const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nowmusic');

const Artist = require('./models/artist');
const Song = require('./models/song');

let artist = new Artist({name: 'Weezer'});
let song = new Song({title: 'Say It Ain\'t So', duration: 220});

artist.save()
.then(doc => {
  console.log('saved:', doc);
  mongoose.disconnect();
})
.catch(err => {
  console.log('error saving:', err.message);
  mongoose.disconnect();
});