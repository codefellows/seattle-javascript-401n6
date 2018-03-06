const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Book = require('../../models/book-mongodb');

function save(book) {
  let bookModel = new Book({
    name: book.name,
    author: book.author,
    words: book.words,
  })

  return new Promise((resolve, reject) => {
    bookModel.save((err, savedBook) => {
      resolve(savedBook);
    })
  });
}

function get(id) {
  return new Promise((resolve, reject) => {
    Book.find({id: id}, (err, books) => {
      resolve(books);
    })
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    Book.find((err, books) => {
      resolve(books);
    })
  });
}

// watch out! 'delete' is a keyword in JavaScript. Get creative.
function remove(id) {
  return new Promise({id: id}, (resolve, reject) => {
    Book.remove((err, books) => {
      resolve(books);
    })
  });
}

function removeAll() {
  return new Promise((resolve, reject) => {
    Book.remove((err, books) => {
      resolve(books);
    })
  });
}

module.exports = {save, get, getAll, remove, removeAll};