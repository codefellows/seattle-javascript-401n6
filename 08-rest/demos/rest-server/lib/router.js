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
    const path = url;
    console.log('URL:', url);
    console.log('PATH:', path);

    const route = this.routes[method][url];
    if (!route) {
      throw `404 Not Found: ${method} ${url}`; 
    }
    route(req, res);
  }

  tryRoute(req, res) {
    try {
      return this.route(req, res);
    } catch (error) {
      console.log('ERROR:', error)
      // assume the worst as 500
      let code = 500;
      if (error && error.code && error.code.substr) {
        let status = error.substr(0,3)
        code = parseInt(status, 10);
        if (isNaN(code) || code < 300 || code >= 499) {
          // internal server error
          code = 500;
        }
      }
      res.writeHead(code);
      res.write(error);
      res.end();
      return;
    }
  }
}

module.exports = Router;