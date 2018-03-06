const mongodb = require('./mongodb-storage');

const Book = require('../../models/book');

// accepts some type of storage, removes everything in it
// then adds several common standard books to it.
function seed(storage) {
  return storage.removeAll()
  .then(() => {
    return Promise.all([
      storage.save(new Book({name: "Dune", author: "Frank Herbert", words: 900 * 120})),
      storage.save(new Book({name: "Harry Potter", author: "JK Rowling", words: 900 * 98})),
      storage.save(new Book({name: "Hitchhiker's Guide", author: "Douglas Adams", words: 42 * 42 * 42}))
    ])
  });
}

module.exports = {mongodb, seed};