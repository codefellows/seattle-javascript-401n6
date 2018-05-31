const Movies = require('../models/movie');

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('getting movies')
  let skip = req.query.skip || 0;
  let limit = req.query.limit || 10;

  skip = parseInt(skip);
  limit = parseInt(limit);


  Movies.find({})
  .skip(skip)
  .limit(limit)
  .then(movies => {
    console.log('movies', movies.length);
    Movies.count()
    .then(total => {
      res.send({
        movies,
        total,
      });
    })
  });
});

module.exports = router;
