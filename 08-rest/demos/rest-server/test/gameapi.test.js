const request = require('superagent');

const SERVER_URL = 'http://localhost:3000';

describe('games API', () => {
  test('get all games', (done) => {
    request.get(SERVER_URL + '/games')
    .end((err, res) => {
      expect(res.status).toBe(200);

      let games = res.body;
      expect(games.length).toBe(3);
      done();
    });
  });

  test('get one game', (done) => {
    request.get(SERVER_URL + '/games')
    .end((err, res) => {
      expect(res.status).toBe(200);

      let games = res.body;
      expect(games.length).toBe(3);

      let game = games[0];
      request.get(SERVER_URL + `/games?id=${game.id}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        let gameResponse = res.body;
        expect(gameResponse.name).toEqual(game.name);
        expect(gameResponse.players).toEqual(game.players);
        expect(gameResponse.playtime).toEqual(game.playtime);
      });
    });
  });
})