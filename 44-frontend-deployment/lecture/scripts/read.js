require('dotenv').config();
const Movie = require('../models/movie');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

Movie.find({})
.then(movies => {
  console.log(movies)
})
.then(() => mongoose.disconnect());