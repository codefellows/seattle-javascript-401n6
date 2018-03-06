const memory = require('./memory-storage');
const file = require('./file-storage');
const mongodb = require('./mongodb-storage');

const Book = require('../../models/book');

// accepts some type of storage, removes everything in it
// then adds several common standard books to it.
function seed(storage) {
  return storage.removeAll()
  .then(() => {
    return Promise.all([
      storage.save(new Book("Dune", "Frank Herbert", 900 * 120)),
      storage.save(new Book("Harry Potter", "JK Rowling", 900 * 98)),
      storage.save(new Book("Hitchhiker's Guide", "Douglas Adams", 42 * 42 * 42))
    ])
  });
}

module.exports = {file, memory, mongodb, seed};