var express = require('express')
var router = express.Router()

const storage = require('../lib/storage/storage').mongodb;

router.get('/', (req, res) => {
  if (req.query.id) {
    let id = req.query.id;
    storage.get(id)
    .then(book => {
      res.send(book);
    });
  } else {
    storage.getAll()
    .then(books => {
      res.send(books);
    });
  }
});

router.post('/', (req, res) => {
  // pick the book attributes off the request.
  let book = {
    name: req.body.name,
    author: req.body.author,
    words: req.body.words,
  };

  // save the book to the database
  storage.save(book)
  .then(book => {
    res.status(200);
    res.send(book);
  });
})

router.put('/', (req, res) => {
  let id = req.query.id;
  storage.get(id)
  .then(book => {
    // Allow users to only send the properties they want to update
    // Only update a property if someone passed it.
    if (req.body.name) {
      book.name = req.body.name;
    }
    if (req.body.author) {
      book.author = req.body.author;
    }
    if (req.body.words) {
      book.words = req.body.words;
    }

    book.save((err, book) => {
      res.send(book);
    })
  });
});

router.delete('/', (req, res) => {
  let id = req.query.id;
  storage.remove(id)
  .then(book => {
    res.send(book);
  });
});

module.exports = router;