const Book = require('../models/book');

describe("Book", ()=> {
  test("it should have an id", () => {
    let book = new Book("War and Peace", "Tolstoy", 124300);
    expect(book.id.length).toEqual(36);
  })
})