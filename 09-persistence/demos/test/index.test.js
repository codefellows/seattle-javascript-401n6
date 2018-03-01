const request = require('superagent');
const SERVER = "http://localhost:3001";

describe("Server", () => {
  test("responds with text", (done) => {
    request.get(SERVER + '/plaintext')
    .end((err, res) => {
      if (err) {
        console.log("ERROR:", err);
      }
      expect(res.status).toEqual(200);
      expect(res.text).toEqual('good');
      done();
    });
  });

  test("responds with json", (done) => {
    request.get(SERVER + '/json')
    .end((err, res) => {
      if (err) {
        console.log("ERROR:", err);
      }
      expect(res.status).toEqual(200);
      expect(res.body.mylist).toEqual([1,2,3]);
      done();
    });
  });

  test("responds 404 for any unknown path", (done) => {
    request.get(SERVER + '/notfound')
    .end((err, res) => {
      if (err) {
        //console.log("ERROR:", err);
        expect(res.status).toEqual(404);
        expect(res.text.includes("URL not found")).toBe(true);
        expect(res.text.includes("/notfound")).toBe(true);
        done();
      }
    });
  });
});