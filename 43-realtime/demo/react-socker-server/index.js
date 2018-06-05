const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let clicks = 0;

io.on('connection', socket => {
  console.log('connected:', socket.id);
  console.log('sending initial click info', clicks);
  io.emit('click-info', {clicks});

  socket.on('increment-click', () => {
    console.log('got click');
    clicks++;
    console.log('broadcasting click', clicks);
    io.emit('click-info', {clicks});
  });
});

const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
