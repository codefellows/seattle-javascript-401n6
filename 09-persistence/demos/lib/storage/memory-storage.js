let BOOKS = {};

function save(book) {
  return new Promise((resolve, reject) => {
    BOOKS[book.id] = book;
    resolve(book)
  });
}

function get(id) {
  return new Promise((resolve, reject) => {
    return BOOKS[id];
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    resolve(Object.values(BOOKS));
  });
}

// watch out! 'delete' is a keyword in JavaScript. Get creative.
function remove(id) {
  return new Promise((resolve, reject) => {
    let book = get(id);
    delete BOOKS[id];
    resolve(book);
  });
}

function removeAll() {
  return new Promise((resolve, reject) => {
    // grab the books
    deletedBooks = Object.values(BOOKS);
    // reset the books
    BOOKS = {};
    // return the books
    resolve(deletedBooks);
  });
}

module.exports = {save, get, getAll, remove, removeAll};