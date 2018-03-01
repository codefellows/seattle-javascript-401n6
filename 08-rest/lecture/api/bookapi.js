const storage = require('../lib/storage');

function getBooks(req, res) {
  let books = storage.getAll();
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(books));
  res.end(); 
}