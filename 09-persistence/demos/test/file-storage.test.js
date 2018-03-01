const fileStorage = require('../lib/storage/file-storage');
const Book = require('../models/book');

describe("File Storage", () => {
  let book = new Book("foo", "bar", 1240);
  book.id = "test"

  it("should write files to file", (done) => {
    fileStorage.save(book)
    .then((savedBook) => {
      expect(book.id).toEqual(savedBook.id);
      expect(book.name).toEqual(savedBook.name);
      expect(book.author).toEqual(savedBook.author);
      expect(book.words).toEqual(savedBook.words);
      done();
    });
  });

  it("should be able to get a file from the filesystem", (done) => {
    fileStorage.get(book.id)
    .then((savedBook) => {
      expect(book.id).toEqual(savedBook.id);
      expect(book.name).toEqual(savedBook.name);
      expect(book.author).toEqual(savedBook.author);
      expect(book.words).toEqual(savedBook.words);
      done();
    });
  });

  it("should be able to delete a file", (done) => {
    fileStorage.remove(book.id)
    .then((removedBook) => {
      expect(book.id).toEqual(removedBook.id);
      expect(book.name).toEqual(removedBook.name);
      expect(book.author).toEqual(removedBook.author);
      expect(book.words).toEqual(removedBook.words);
      done();
    });
  });

  it("should be able to edit a file", (done) => {
    book.name = "Harry Potter 2";
    book.author = "JK Rowling";
    book.words = 999;

    fileStorage.save(book)
    .then((savedBook) => {
      expect(book.id).toEqual(savedBook.id);
      expect(book.name).toEqual(savedBook.name);
      expect(book.author).toEqual(savedBook.author);
      expect(book.words).toEqual(savedBook.words);
      done();
    });
  })

  it("should be able to return all files", (done) => {
    fileStorage.getAll()
    .then(files => {
      done();
    });
  });

  it("should be able to delete all files", (done) => {
    fileStorage.removeAll()
    .then(deletedBooks => {
      done();
    });
  });

  it("should be able to create many books and delete them all", (done) => {
    let randomBook = () => {
      // random number for name, author and pages
      return new Book(Math.random(), Math.random(), Math.random());
    }

    let books = [
      randomBook(),
      randomBook(),
      randomBook(),
      randomBook()
    ]

    // delete all books first to make sure it's clean.
    fileStorage.removeAll()
    .then(() => {
      let bookSaves = [
        fileStorage.save(books[0]),
        fileStorage.save(books[1]),
        fileStorage.save(books[2]),
        fileStorage.save(books[3]),
      ];
      return Promise.all(bookSaves)
    })
    .then(savedBooks => {
      for (let i = 0; i < books.length; i++) {
        expect(savedBooks[i].name).toEqual(books[i].name);
        expect(savedBooks[i].author).toEqual(books[i].author);
        expect(savedBooks[i].words).toEqual(books[i].words);
      }
    })
    .then(() => {
      return fileStorage.getAll();
    })
    .then((savedBooks) => {
      expect(savedBooks.length).toEqual(4);
    })
    .then(() => {
      return fileStorage.removeAll();
    })
    .then(deletedBooks => {
      // pretty annoying, but we have to sort the two lists somehow.
      // reading them back from files in the filesystem won't have their
      // original order.
      let origLookup = books.reduce((lookup, book) => {
        lookup[book.id] = book;
        return lookup;
      }, {});

      let delLookup = deletedBooks.reduce((lookup, book) => {
        lookup[book.id] = book;
        return lookup;
      }, {});

      for (id in origLookup) {
        expect(origLookup[id].name).toEqual(delLookup[id].name);
        expect(origLookup[id].author).toEqual(delLookup[id].author);
        expect(origLookup[id].words).toEqual(delLookup[id].words);
      }
    })
    .then(() => {
      return fileStorage.getAll();
    })
    .then((files) => {
      expect(files.length).toEqual(0);
      done();
    });
  });
});