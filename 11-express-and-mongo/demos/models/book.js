const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  words: Number,
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book