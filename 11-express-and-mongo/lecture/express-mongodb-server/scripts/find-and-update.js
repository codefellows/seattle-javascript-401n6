const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Beer = require('../models/beer');

Beer.findOne({name: "Rolling Rock"})
.then(rollingRock => {
  console.log("Rating was:", rollingRock.rating);
  rollingRock.rating = Math.random();
  return rollingRock.save();
})
.then(newRollingRock => {
  console.log("Rating now:", newRollingRock.rating);
  mongoose.disconnect();
})
