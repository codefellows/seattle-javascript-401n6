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
    if (!route) {
      throw `404 Not Found: ${method} ${url}`; 
    }
    route(req, res);
  }

  tryRoute(req, res) {
    try {
      return route(req, res);
    } catch (error) {
      let status = error.substr(0,3)
      let code = parseInt(status, 10);
      if (isNaN(code) || code < 300 || code >= 499) {
        // internal server error
        code = 500;
      }
      res.writeHead(code);
      res.write(error);
      res.end();
      return;
    }
  }
}

module.exports = Router;