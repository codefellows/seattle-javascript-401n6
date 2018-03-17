const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/better');

// attach bodyParser as middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// attach custom middleware that adds a timestamp propery
// to every request so it can be access further down the line
app.use((req, res, next) => {
  req.timestamp = new Date();
  next();
});

const routes = require('./routes/examples');
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});