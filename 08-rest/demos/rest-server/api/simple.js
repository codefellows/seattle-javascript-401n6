function text(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('hi');
  res.end();
}

function json(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify({data: [1,2,3]}));
  res.end();
}

module.exports = {text, json}