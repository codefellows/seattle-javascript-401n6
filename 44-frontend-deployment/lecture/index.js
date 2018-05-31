require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.send({data: [12,3]});
})

const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});