const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Beer = require('../models/beer');

Beer.findOne({name: "Orange Juice"})
.then(drink => {
  console.log("Found:", drink);
  mongoose.disconnect();
})
