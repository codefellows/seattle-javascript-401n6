const ROUTES = {
  GET: {},
  PUT: {},
  POST: {},
  DELETE: {}
}

function get(path, cb) {
  ROUTES.GET[path] = cb;
}

function post(path, cb) {
  ROUTES.GET[path] = cb;
}

function route(req, res) {


}

module.exports = {get, put, post, remove, tryRoute, route};