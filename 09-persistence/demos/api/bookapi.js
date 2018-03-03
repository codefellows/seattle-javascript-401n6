const storage = require('../lib/storage/storage');

function getBooks(req, res) {
  storage.getAll()
  .then(books => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(books));
    res.end(); 
  })
}