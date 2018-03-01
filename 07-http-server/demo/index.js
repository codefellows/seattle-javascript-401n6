"use strict";

const http = require('http');
const url = require('url');
const querystring = require('querystring');

let name = "unknown"

const server = http.createServer((req, res) => {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);
  console.log('METHOD:', req.method);
  console.log('query:', req.url.query);
  if (req.method === 'PUT') {
    name = req.url.query.name;
  } else if (req.method === 'DELETE') {
    name = 'unknown'
  }

  res.writeHead(200, {
    // Content-Type: text/html; charset=utf-8
    // 'Content-Type' : 'application/json'
    'Content-Type': 'text/plain'
  });

  res.write("<html>");
  res.write("<h1>Hello!</h1>");
  res.write("<p>Welcome to my webpage, ");
  res.write(name);
  res.write("!</p>");
  res.write("</html>");
  res.end();
})

const PORT = process.ENV || 3000;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
})