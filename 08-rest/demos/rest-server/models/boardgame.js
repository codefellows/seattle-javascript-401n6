const uuidv4 = require('uuid/v4');

class BoardGame {
  constructor(name, players, playtime) {
    this.id = uuidv4();
    this.name = name;
    this.players = players;
    // playtime in minutes
    this.playtime = playtime;
  }
}

module.exports = BoardGame;