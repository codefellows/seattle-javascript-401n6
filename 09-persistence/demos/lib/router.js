const bodyparser = require('./bodyparser');

const ROUTES = {
  GET: {},
  PUT: {},
  POST: {},
  DELETE: {}
}

function get(path, cb) {
  ROUTES.GET[path] = cb;
}

function put(path, cb) {
  ROUTES.PUT[path] = cb;
}

function post(path, cb) {
  ROUTES.POST[path] = cb;
}

function del(path, cb) {
  ROUTES.DELETE[path] = cb;
}

function sendError(req, res, error) {
  if (error.status && error.message) {
    res.writeHead(error.status);
    res.write(error.message);
  } else {
    res.writeHead(500);
    res.write("Internal Server Error: " + error);
  }
  res.end();
}

function route(req, res) {
  // async wait for the entire body to come in and be parsed.
  bodyparser(req)
  .then(() => {
    let method = req.method;
    let path = req.url.pathname;
    const route = ROUTES[method][path];
    if (!route) {
      throw {status: 404, message: `URL not found: ${method} ${path}`}; 
    }
    route(req, res);
  })
  .catch(error => {
    sendError(req, res, error);
  });
}

module.exports = {get, put, post, del, route};