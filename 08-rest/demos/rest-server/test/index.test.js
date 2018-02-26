const request = require('superagent');

const SERVER_URL = 'http://localhost:3000';

describe('Server', () => {
  // Failure test.
  // test('Make sure server is running', (done) => {
  //   request.get(SERVER_URL)
  //   .end((err, res) => {
  //     if (err) {
  //       expect(err.code).toBe('ECONNREFUSED');
  //       done();
  //     }
  //   })
  // })

  test('/text should return with "hi"', (done) => {
    request.get(SERVER_URL + '/text')
    .end((err, res) => {
      expect(res.status).toBe(200);
      expect(res.text).toBe('hi');
      done();
    })
  });

  test('/json should return with [1,2,3]', (done) => {
    request.get(SERVER_URL + '/json')
    .end((err, res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({data: [1,2,3]})
      done();
    })
  });
});