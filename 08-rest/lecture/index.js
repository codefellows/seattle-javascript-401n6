const http = require('http');

const server = http.createServer((req, res) => {
  // detect if the path is /api/books
  // detect between GET/PUT/POST/DELETE
  // retrieve and ?id= query parameters
  // retrieve any POST/PUT body data
  // we want to retrieve information and send good responses.

});

let PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});