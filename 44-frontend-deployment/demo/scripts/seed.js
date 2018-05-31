require('dotenv').config();

const fs = require('fs');

const Movie = require('../models/movie');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);


Movie.remove({})
.then(() => {
  return new Promise((resolve, reject) => {
    fs.readFile('./movie_titles.csv', 'utf-8', (err, data) => {
      let lines = data.split('\n');
      let saves = lines.map(line => {
        let [_, year, ...title] = line.split(',');
        title = title.join(',');
        return Movie.create({title, year})
      });

      Promise.all(saves)
      .then(() => {
        console.log('resolved', saves.length);
        resolve();
      })
      .catch(() => {
        console.log('rejected');
        reject();
      });
    });
  });
})
.then(() => {
  return Movie.find({})
})
.then(movies => {
  console.log('queried:', movies.length);
})
.then(() => {
  console.log('disconnected');
  mongoose.disconnect();
});

