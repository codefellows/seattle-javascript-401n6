const express = require('express');
const router = express.Router();
const Beer = require('../models/beer');

// returns the ids of all beers
router.get('/', (req, res) => {
  // if the user specifies a beer id
  // then look up just one beer
  if (req.query.id) {
    Beer.findOne({_id: req.query.id})
    .then((results) => {
      console.log("FOUND:", results);
      console.log("FOUND TOTAL:", results.length);
      res.send(results); 
    })
  } else {
    // otherwise we return all the beers
    Beer.find()
    .then((results) => {
      console.log("FOUND:", results);
      console.log("FOUND TOTAL:", results.length);
      res.send(results); 
    })
  }
});

module.exports = router;
