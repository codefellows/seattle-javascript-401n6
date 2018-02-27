const uuid = require('uuid/v4');

class Book {
  constructor(name, author, words) {
    // the id is generated when a new Book is created
    // the id is NOT supplied by the user.
    this.id = uuid();
    this.name = name;
    this.author = author;
    this.words = words;
  }
}

module.exports = Book;