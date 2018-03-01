const BoardGame = require('../models/boardgame.js');

// one object to store all games
let GAMES = {};

// pre-populate the storage with a few known games.
function seed() {
  // reset all previous games
  GAMES = {};

  // create and add new already-known games.
  const risk = new BoardGame("Risk", 6, 180);
  const catan = new BoardGame("Catan", 4, 80);
  const solitaire = new BoardGame("Solitaire", 1, 30);

  GAMES[risk.id] = risk;
  GAMES[catan.id] = catan;
  GAMES[solitaire.id] = solitaire;
}

function size() {
  let games = readAll();
  return games.length;
}

function create(name, players, playtime) {
  // make sure players and playtime are actual numbers (not strings)
  players = parseInt(players, 10);
  playtime = parseInt(playtime, 10);

  const game = new BoardGame(name, players, playtime);
  GAMES[game.id] = game;
  return game;
}

function readAll() {
  return Object.values(GAMES);
}

function read(id) {
  if (!id in GAMES) {
    throw "Game doesn't exist. ID: " + id;
  }
  return GAMES[id];
}

function update(id, name, players, playtime) {
  let game = read(id);
  game.name = name;
  game.players = players;
  game.playtime = playtime;
  return game;
}

function del(id) {
  // read the game to make sure it exists
  let game = read(id);
  delete GAMES[id];
  return game;
}

module.exports = {
  seed, size,
  create, readAll, read, update, del,
};
