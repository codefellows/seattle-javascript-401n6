const http = require('http');
const router = require('./lib/router');

function replyText(res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("good");
  res.end();
}
function replyJSON(res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  let json = JSON.stringify({mylist: [1,2,3]});
  res.write(json);
  res.end();
}

const server = http.createServer((req, res) => {
  // detect if the path is /api/books
  // detect between GET/PUT/POST/DELETE
  // retrieve and ?id= query parameters
  // retrieve any POST/PUT body data
  // we want to retrieve information and send good responses.
  router.get('/api/books', );
  router.post('/api/books');


  if (req.url === '/plaintext') {
    return replyText(res);
  } else if (req.url === '/json') {
    return replyJSON(res);
  } else {
    res.writeHead(404);
    res.write('URL not found: ' + req.url);
    res.end();
  }
});

let PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});