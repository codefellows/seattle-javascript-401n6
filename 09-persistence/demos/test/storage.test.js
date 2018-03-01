const storage = require('../lib/storage/storage');
const memoryStorage = storage.memory;
const fileStorage = storage.file;
const Book = require('../models/book');

describe("Memory Storage", () => {
  test("seed create three books", (done) => {
    storage.seed(memoryStorage)
    .then(() => {
      return memoryStorage.getAll();
    })
    .then(books => {
      expect(books.length).toEqual(3);
      done();
    });
  })

  test("can create a new book", (done) => {
    let book = new Book("Cat in the Hat", "Dr. Suess", 1000);
    memoryStorage.save(book);
    memoryStorage.getAll()
    .then(books => {
      expect(books.length).toEqual(4);
      done();
    });
  })
})

describe("File Storage", () => {
  test("seed create three books", (done) => {
    storage.seed(fileStorage)
    .then(() => {
      return fileStorage.getAll();
    })
    .then(books => {
      expect(books.length).toEqual(3);
      done();
    });
  })

  test("can create a new book", (done) => {
    let book = new Book("Cat in the Hat", "Dr. Suess", 1000);
    fileStorage.save(book);
    fileStorage.getAll()
    .then(books => {
      expect(books.length).toEqual(4);
      done();
    });
  })
})