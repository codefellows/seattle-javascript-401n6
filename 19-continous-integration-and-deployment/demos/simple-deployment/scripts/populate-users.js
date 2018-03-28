require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  return User.remove();
})
.then(() => {
  let mario = new User({
    username: 'mario',
    email: 'mario@nintendo.com',
    password: 'itsame'
  });
  return mario.save();
})
.then((user) => {
  console.log('User 1:', user);

  user.email = 'mario@wii.com';
  return user.save();
})
.then((user) => {
  console.log('User 2:', user);
})
.then(() => {
  mongoose.disconnect();
});

