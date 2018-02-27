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
})