const storage = require('../lib/storage');
const Book = require('../models/book');

describe("Storage", () => {
  test("seed create three books", () => {
    storage.seed();
    let books = storage.getAll();
    expect(books.length).toEqual(3);
  })

  test("can create a new book", () => {
    let book = new Book("Cat in the Hat", "Dr. Suess", 1000);
    storage.save(book);
    let books = storage.getAll();
    expect(books.length).toEqual(4);
  })
})