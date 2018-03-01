const Book = require('../../models/book');

let BOOKS = {};

function seed() {
  BOOKS = {};
  save(new Book("Dune", "Frank Herbert", 900 * 120));
  save(new Book("Harry Potter", "JK Rowling", 900 * 98));
  save(new Book("Hitchhiker's Guide", "Douglas Adams", 42 * 42 * 42));
}

function save(book) {
  BOOKS[book.id] = book;
}

function get(id) {
  return BOOKS[id];
}

function getAll() {
  return Object.values(BOOKS);
}

// watch out! 'delete' is a keyword in JavaScript. Get creative.
function remove(id) {
  let book = get(id);
  delete BOOKS[id];
  return book;
}

module.exports = {seed, save, get, getAll, remove};