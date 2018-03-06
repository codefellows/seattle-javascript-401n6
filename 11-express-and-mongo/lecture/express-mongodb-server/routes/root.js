const express = require('express');
const router = express.Router();

// Root routes at root "/"
router.get('/', (req, res) => {
  res.send(new Date());
});

router.post('/', (req, res) => {
  console.log("GOT BODY:", req.body);
  res.send(req.body)
})

module.exports = router;