require('dotenv').config();

const express = require('express');
const app = express();

// connect MongoDB to MLabs after simpler proven deployment
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const User = require('./models/user');

const USERNAME = 'admin';
const PASSWORD = 'opensesame';

app.get('/', (req, res) => {
  res.write('<h1>Welcome!</h1>');
  let date = new Date();
  console.log(date.getDate(), date.getMonth());
  if (date.getDate() === 28 && date.getMonth() === 3 - 1) {
    res.write('<h2>Happy birthday Mitch!</h2>');
  }
  res.write('<p>Try to access <a href="/secret">/secret</a> to see a secret recipe!</p>');
  res.send();
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
  User.findOne({username: username})
  .then(user => {
    console.log('found user:', user);
    if (username === user.username && password === user.passwordHash) {
      res.send('Secret Recipe.');
    } else {
      res.send('Incorrect username or password.');
    }
  });
});

// deletes ALL users currently in the database
User.remove()
.then(() => {
  // create a new Admin user
  let admin = new User({
    username: USERNAME,
    email: 'admin@admin.com',
    passwordHash: PASSWORD
  });
  // save it
  return admin.save();
})
.then(() => {
  // once everything is deleted and the admin is saved
  // then actually start the server
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
  });
});
