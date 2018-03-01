const http = require('http');
const router = require('./lib/router');

const simpleAPI = require('./api/simple');
const bookAPI = require('./api/bookapi');

router.get('/plaintext', simpleAPI.replyText);
router.get('/json', simpleAPI.replyJSON);

router.get('/api/books', bookAPI.getBooks);
router.post('/api/books');
router.put('/api/books');
router.del('/api/books');

const server = http.createServer((req, res) => {
  router.route(req, res);
});

let PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});