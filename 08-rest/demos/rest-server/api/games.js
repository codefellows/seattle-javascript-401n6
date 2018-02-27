const storage = require('../lib/storage');
storage.seed();

function getGame(req, res) {
  console.log(req.url);
  let id = req.url.query;
  let game = storage.readGame(id);

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.write(JSON.stringify(game));
  res.end();
}

function getAllGames(req, res) {
  let games = storage.readAll();

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.write(JSON.stringify(games));
  res.end();
}

function createGame(req, res) {

}

function updateGame(req, res) {

}

function deleteGame(req, res) {

}

module.exports = {getGame, getAllGames, createGame, updateGame, deleteGame};