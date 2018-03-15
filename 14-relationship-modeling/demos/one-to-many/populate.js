const fs = require('fs');
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/nowmusic');

const Artist = require('./models/artist');
const Song = require('./models/song');

const DATAFILE = 'now-thats-what-i-call-music.csv';
//const DATAFILE = 'now-small.csv';
fs.readFile(DATAFILE, (err, data) => {
  const lines = data.toString().split('\n');
  console.log('LINES:', lines.length);

  Artist.remove()
  .then(() => {
    Song.remove()
  }).then(() => {
    const saves = [];
    lines.forEach(line => {
      const cells = line.split(',');
      // ignore any songs that have problematic commas
      if (cells.length === 3) {
        let duration = cells[0];
        let artistName = cells[1];
        let songTitle = cells[2].trim();

        let artist = new Artist({name: artistName});
        let song = new Song({title: songTitle, duration: duration});

        console.log('Looking for artist', artistName, artist);
        let promise = Artist.findOne({name: artist.name});
        saves.push(promise);

        promise
        .then(savedArtist => {
          if (!savedArtist) {
            console.log('Creating artist:', artist);
            return artist.save();
          }
          return savedArtist;
        })
        .then((savedArtist) => {
          song.artist = savedArtist;
          return song.save();
        })
        .then(savedSong => {
          console.log('Artist:', savedSong.artist.name, '---- Song:', savedSong.title);
        })
        .catch(err => {
          console.log('error saving:', err.message);
        });
      }
    });
    return Promise.all(saves);
  })
  .then(docs => {
    console.log('Finished saving:', docs.length);
  })
  .finally(() => {
    mongoose.disconnect();
  });
});