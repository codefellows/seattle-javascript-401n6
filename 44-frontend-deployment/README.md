![cf](http://i.imgur.com/7v5ASc8.png) 44: Frontend Deployment
===

## Resources
* [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
* [Parcel Bundler Middleware](https://github.com/parcel-bundler/parcel/issues/355#issuecomment-353806604)

## Learning Objectives
* Students will create a full stack app with a database, server and front-end


### Webpack Middleware Configuration
```js
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack({ .. webpack options .. });
const express = require('express');
const app = express();

app.use(middleware(compiler, {
  // webpack-dev-middleware options
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

### Parcel Bundler Configuration
```js
const Bundler = require('parcel-bundler');
const express = require('express');

let bundler = new Bundler('path/to/index.html');
let app = express();

app.use(bundler.middleware());
app.listen(5000);
```

# Pagination
**Pagination** is the process splitting up large data sets across multiple
pages. The browser can request slices of information instead of having to load
it all at once.

You must keep track of this information in order to implement pagination:

* **limit** - the number of items to return per page
* **offset** - how far into the data set to start retrieving data.

Now we can build URLs that look like this:

```url
http://myserver.com/get-movies?limit=100&offset=300
```

Consider combining pagination with a server endpoint that accepts queries as
well.

```url
http://myserver.com/get-movies
?limit=100
&offset=300
&title=Ninja Turtles
&maxyear=2000
```
