class Router {
  constructor() {
    this.routes = {
      GET: {},
      POST: {},
      PUT: {},
      DELETE: {}
    }
  }

  get(path, cb) {
    this.routes.GET[path] = cb;
  }

  post(path, cb) {
    this.routes.POST[path] = cb;
  }

  put(path, cb) {
    this.routes.PUT[path] = cb;
  }

  delete(path, cb) {
    this.routes.DELETE[path] = cb;
  }

  route(req, res) {
    const method = req.method;
    const url = req.url;

    const route = this.routes[method][url];
    return route(req, res);
  }
}

module.exports = Router;