const storage = require('../lib/storage/storage');
const mongodbStorage = storage.mongodb;

const Book = require('../models/book');

describe("MongoDB Storage", () => {
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
    let book = new Book("Cat in the Hat", "Dr. Suess", 1000);
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