require('dotenv').config();

const express = require('express');
const app = express();

// connect MongoDB to MLabs after simpler proven deployment
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI);
const USERNAME = 'admin';
const PASSWORD = 'opensesame';

app.get('/', (req, res) => {
  res.send('Welcome! Try to access <a href="/secret">/secret</a> to see a secret recipe!');
});

app.get('/secret', (req, res) => {
  let authHeader = req.get('Authorization');
  console.log('header:', authHeader);
  if (!authHeader) {
    res.status(401);
    res.send('Must provide username/password');
    return;
  } 

  let payload = authHeader.split('Basic ')[1];
  let decoded = Buffer.from(payload, 'base64').toString();
  let [username, password] = decoded.split(':');

  console.log('username/password:', username, password);
  if (username === USERNAME && password === PASSWORD) {
    res.send('Secret Recipe.');
  } else {
    res.send('Incorrect username or password.');
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});