var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let CLICKS = 0;
let TICK_INTERVAL;

// Refer to cheatsheet to see how to send
// different types of messages
// https://socket.io/docs/emit-cheatsheet/
io.on('connection', function(socket){
  socket.emit('click-total', {clicks: CLICKS});

  console.log('a user connected');
  socket.on('send-click', () => {
    console.log('got "send-click event"', CLICKS++);
    io.emit('click-total', {clicks: CLICKS});
  });

  if (!TICK_INTERVAL) {
    TICK_INTERVAL = setInterval(() => {
      console.log('tick');
      io.emit('tick', {currentTime: Date.now().toString()});
    }, 1000);
  }
});

const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

http.listen(3000, function(){
  console.log('listening on *:3000');
});