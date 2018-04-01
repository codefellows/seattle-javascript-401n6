require('dotenv').config();
const request = require('superagent');

describe('Server', () => {
  it('homepage contains Welcome!', (done) => {
    let url = `http://localhost:${process.env.PORT}/`;
    request.get(url)
    .then(res => {
      if (res.text.includes('Welcome!')) {
        expect(true).toBe(true);
      } else {
        // trick jest into showing us a diff
        expect(res.body).toBe('[to include] Welcome!');
      }

      done();
    });
  });
});
