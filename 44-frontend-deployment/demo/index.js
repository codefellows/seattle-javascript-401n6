require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const express = require('express');
const app = express();

const movieRouter = require('./routes/movies');

app.use('/movies', movieRouter);

app.get('/welcome', (req, res) => {
  console.log('dish out welcome')
  res.send('welcome!');
});

// attach the bundler after other routes
// or else it will catch everything!
const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
