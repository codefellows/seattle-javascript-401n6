const fs = require('fs');

let STORAGE_DIRECTORY = __dirname + '/savedfiles';

function bookIDToFilename(id) {
  return STORAGE_DIRECTORY + '/' + id + '.json';
}

function save(book) {
  return new Promise((resolve, reject) => {
    let filename = bookIDToFilename(book.id);
    let data = JSON.stringify(book);
    fs.writeFile(filename, data, (err) => {
      resolve(book);
    });
  });
}

function get(id) {
  return new Promise((resolve, reject) => {
    let filename = bookIDToFilename(id);
    fs.readFile(filename, (err, data) => {
      let book = JSON.parse(data);
      resolve(book); 
    });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    fs.readdir(STORAGE_DIRECTORY, (err, files) => {
      resolve(files); 
    });
  });
}

// watch out! 'delete' is a keyword in JavaScript. Get creative.
function remove(id) {
  return new Promise((resolve, reject) => {
    get(id)
    .then(book => {
      let filename = bookIDToFilename(id);
      fs.unlink(filename, (err) => {
        resolve(book);
      });
    });
  });
}

function removeAll() {
  return getAll()
  .then(files => {
    let promises = files.map(file => {
      let id = file.split(".json")[0];
      return remove(id);
    });
    return Promise.all(promises);
  });
}

module.exports = {save, get, getAll, remove, removeAll};