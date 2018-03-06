const mongoose = require('mongoose');

// a schema defines the structure of a resource
let beerSchema = mongoose.Schema({
  name: String,
  abv: Number,
  rating: Number,
});

// the model accepts a Schema and attaches helpful
// find, save, delete -like methods to it
let Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer;