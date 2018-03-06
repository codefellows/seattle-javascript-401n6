var express = require('express')
var router = express.Router()

const storage = require('../lib/storage/storage').mongodb;

router.get('/api/books', (req, res) => {
  storage.getAll()
  .then(books => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(books));
    res.end(); 
  });
});

module.exports = router;