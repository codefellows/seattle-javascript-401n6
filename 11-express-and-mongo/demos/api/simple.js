function replyText(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("good");
  res.end();
}

function replyJSON(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  let json = JSON.stringify({mylist: [1,2,3]});
  res.write(json);
  res.end();
}

module.exports = {replyText, replyJSON};