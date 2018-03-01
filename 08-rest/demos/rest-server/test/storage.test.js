const storage = require('../lib/storage');

describe("Storage", () => {
  beforeEach(() => {
    storage.seed();
  })

  test("Should have a few games after populating", () => {
    expect(storage.size()).toEqual(3);
  });

  test("should be able to create a new game", () => {
    let name = "monopoly";
    let players = 6;
    let playtime = 180;
    let game = storage.create(name, players, playtime);

    expect(game.name).toEqual(name);
    expect(game.players).toEqual(players);
    expect(game.playtime).toEqual(playtime);

    expect(storage.size()).toEqual(4);
  });

  test("should be able to create a new game then get it", () => {
    let name = "uno";
    let players = 4;
    let playtime = 60;
    let game = storage.create(name, players, playtime);

    expect(game.name).toEqual(name);
    expect(game.players).toEqual(players);
    expect(game.playtime).toEqual(playtime);

    expect(storage.size()).toEqual(4);

    let readGame = storage.read(game.id);
    expect(readGame.name).toEqual(name);
    expect(readGame.players).toEqual(players);
    expect(readGame.playtime).toEqual(playtime);
  });

  test("should be able to create a new game then update it", () => {
    let name = "uno";
    let players = 4;
    let playtime = 60;
    let game = storage.create(name, players, playtime);

    expect(game.name).toEqual(name);
    expect(game.players).toEqual(players);
    expect(game.playtime).toEqual(playtime);

    expect(storage.size()).toEqual(4);

    let updatedGame = storage.update(game.id, "UNO!", 6, 120);
    expect(updatedGame.name).toEqual("UNO!");
    expect(updatedGame.players).toEqual(6);
    expect(updatedGame.playtime).toEqual(120);
  });

  test("delete game", () => {
    let gamesBeforeDelete = storage.readAll();
    let originalSize = gamesBeforeDelete.length;
    let game = gamesBeforeDelete[0];

    let isGameInGames = false
    gamesBeforeDelete.forEach(gg => {
      if (gg.id === game.id) {
        isGameInGames = true;
      }
    });
    expect(isGameInGames).toEqual(true);

    storage.del(game.id);

    let gamesAfterDelete = storage.readAll();
    let newSize = gamesAfterDelete.length;

    expect(newSize).toEqual(originalSize - 1);
    gamesAfterDelete.forEach(gg => {
      expect(gg.id).not.toEqual(game.id);
    });
  });
});