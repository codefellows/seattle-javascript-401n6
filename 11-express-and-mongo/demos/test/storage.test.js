const mongoose = require('mongoose');

const storage = require('../lib/storage/storage');
const mongodbStorage = storage.mongodb;

const Book = require('../models/book');

describe("MongoDB Storage", () => {
  afterAll(() => {
    mongoose.disconnect();
  });

  test("seed create three books", (done) => {
    storage.seed(mongodbStorage)
    .then(() => {
      return mongodbStorage.getAll();
    })
    .then(books => {
      expect(books.length).toEqual(3);
      done();
    });
  })

  test("can create a new book", (done) => {
    let book = new Book({name: "Cat in the Hat", author: "Dr. Suess", words: 1000});
    mongodbStorage.save(book)
    .then(() => {
      return mongodbStorage.getAll()
    })
    .then(books => {
      expect(books.length).toEqual(4);
      done();
    });
  })
})