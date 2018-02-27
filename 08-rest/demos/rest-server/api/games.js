const storage = require('../lib/storage');
storage.seed();

function getGames(req, res) {
  let games = storage.readAll();
  let response = games;
  if ('id' in req.url.query) {
    let id = req.url.query.id;
    if (games[id] === undefined) {
      throw "404 game id not found: " + id;
    }
    response = games[id];
  }

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.write(JSON.stringify(response));
  res.end();
}

function createGame(req, res) {
  let name = req.url.query.name;
  let player = req.url.query.player;
  let playtime = req.url.query.playtime;
  
  let game = storage.createGame(name, player, playtime);
  return game;
}

function updateGame(req, res) {

}

function deleteGame(req, res) {

}

module.exports = {getGames, createGame, updateGame, deleteGame};