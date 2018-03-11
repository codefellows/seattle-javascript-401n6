"use-strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// when the server starts connect to the
// database once.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const rootRoutes = require('./routes/root');
const cityRoutes = require('./routes/city');
const beerRoutes = require('./routes/beer');

app.use(function (req, res, next) {
  console.log("Before req had timestamp:", req.timestamp);
  next();
});

app.use(function (req, res, next) {
  req.timestamp = new Date();
  next();
});

app.use(function (req, res, next) {
  console.log("After req had timestamp:", req.timestamp);
  next();
});

// Attach the body parser to pick JSON off
// the HTTP body of incoming requests
app.use(bodyParser.json());

// attach routes to handle different URLs
app.use('/', rootRoutes);
app.use('/city', cityRoutes);
app.use('/town', cityRoutes);
app.use('/village', cityRoutes);
app.use('/beer', beerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});

