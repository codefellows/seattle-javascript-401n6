const parseUrl = require('url').parse;
const parseQuery = require('querystring').parse;

function parseBody(req) {
  let promise = new Promise((resolve, reject) => {
    req.url = parseUrl(req.url);
    req.url.query = parseQuery(req.url.query);

    // Only PUT and POST have data continuously sent to the server
    // after receiving the initial request.
    if (req.method !== "PUT" && req.method !== "POST") {
      resolve();
      return;
    }

    let body = "";
    req.on("data", (data) => {
      body += data.toString();
    })
    req.on("end", () => {
      req.body = body;
      resolve();
    })
    req.on("error", (err) => {
      reject(err);
    })
  });
  return promise;
}

module.exports = parseBody;