const http = require('http');
const url = require('url');
const querystring = require('querystring');

function text(res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('hi');
  res.end();
}

function json(res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify({data: [1,2,3]}));
  res.end();
}

const server = http.createServer((req, res) => {
  console.log('URL:', req.url);
  if (req.url === '/text') {
    return text(res);
  } else if (req.url === '/json') {
    return json(res);
  }
});

const PORT = 3000 || process.env;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
})