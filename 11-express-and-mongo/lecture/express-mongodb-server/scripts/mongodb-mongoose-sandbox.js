const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Beer = require('../models/beer');

let rainier = new Beer({name: 'Rainier', abv: 3.5, rating: 9});
let mannys = new Beer({name: 'Manny\'s', abv: 5, rating: 10});
let rollingRock = new Beer({name: 'Rolling Rock', abv: 3, rating: 1});

Beer.remove()
.then(info => {
  console.log("INFO:", info)
  let saves = [
    rainier.save(),
    mannys.save(),
    rollingRock.save(),
  ]
  return Promise.all(saves)
})
.then((savedBeers) => {
  console.log("SAVED:", savedBeers);
  return Beer.find();
})
.then((results) => {
  console.log("FOUND:", results);
  console.log("FOUND TOTAL:", results.length);
  mongoose.disconnect();
})