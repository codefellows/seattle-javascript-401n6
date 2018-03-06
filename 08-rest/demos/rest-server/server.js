"use strict";

const http = require('http');
const Router = require('./lib/router');

const simpleAPI = require('./api/simple');
const gamesAPI = require('./api/games');

const router = new Router();
router.get('/text', simpleAPI.text);
router.get('/json', simpleAPI.json);

router.get('/games', gamesAPI.getGames);
router.post('/games', gamesAPI.createGame);

const server = http.createServer((req, res) => {
  return router.tryRoute(req, res);
});

const PORT = 3000 || process.env;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
})