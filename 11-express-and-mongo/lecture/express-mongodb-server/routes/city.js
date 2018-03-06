const express = require('express');
const router = express.Router();

// City route
router.get('/', (req, res) => {
  console.log("QUERY PARAMS:", req.query);
  res.send(req.query);
});

module.exports = router;
