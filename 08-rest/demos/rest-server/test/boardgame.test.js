const BoardGame = require('../models/boardgame');

describe("BoardGame Model", () => {
  test("It should have a unique id", () => {
    let risk = new BoardGame("Risk", 6, 180);
    expect(risk.id.length).toEqual(36);

    // simple sanity checks to make sure everything is good
    // in case anything changes in the future.
    expect(risk.name).toEqual("Risk");
    expect(risk.players).toEqual(6);
    expect(risk.playtime).toEqual(180);
  });
});
