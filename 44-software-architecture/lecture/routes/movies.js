const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res) => {
  let skip = req.query.skip || 0;
  let limit = req.query.limit || 10;

  skip = parseInt(skip);
  limit = parseInt(limit);

  Movie.find({})
  .skip(skip)
  .limit(limit)
  .then(movies => {
    Movie.count()
    .then(total => {
      res.send({
        movies: movies,
        total: total,
      })
    })
  })
});

module.exports = router;