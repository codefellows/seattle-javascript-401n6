const BoardGame = require('../models/boardgame');

describe("BoardGame Model", () => {
  test("It should have a unique id", () => {
    let risk = new BoardGame("Risk", 6, 180);
    expect(risk.id.length).toEqual(36);
  });
});
