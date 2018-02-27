const http = require('http');
const url = require('url');
const querystring = require('querystring');
const Router = require('./lib/router');

const simpleAPI = require('./api/simple');
const gamesAPI = require('./api/games');

router = new Router();
router.get('/text', simpleAPI.text);
router.get('/json', simpleAPI.json);

router.get('/games', gamesAPI.getAllGames);

const server = http.createServer((req, res) => {
  console.log('URL:', req.url);
  return router.tryRoute(req, res);
});

const PORT = 3000 || process.env;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
})