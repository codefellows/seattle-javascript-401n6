const uuidv4 = require('uuid/v4');

class BoardGame {
  constructor(name, maxPlayers, playtime) {
    this.id = uuidv4();
    this.name = name;
    this.maxPlayers = maxPlayers;
    // playtime in minutes
    this.playtime = playtime;
  }
}

module.exports = BoardGame;