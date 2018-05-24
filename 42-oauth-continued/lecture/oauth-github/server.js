require('dotenv').config();

let express = require('express');
let app = express();
let superagent = require('superagent');

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: './'});
});

app.get('/oauth-callback', (req, res) => {
  let {code, state} = req.query;
  if (!code) {
    res.write('<h1>Unauthorized</h1>');
    res.write('<p>You must be authorized to access this page.</p>');
    res.end();
  }

  let tokenUrl = 'https://github.com/login/oauth/access_token';
  superagent.post(tokenUrl)
  .send({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code: code
  })
  .then(tokenResponse => {
    let token = tokenResponse.body.access_token;
    let userUrl = 'https://api.github.com/user?';
    userUrl += 'access_token=' + token;
    return superagent.get(userUrl);
  })
  .then(userResponse => {
    let username = userResponse.body.login;
    let bio = userResponse.body.bio;
    res.write('<div>');
    res.write('<a href="http://localhost:3000"><< home</a>');
    res.write('</div>');
    res.write('<div>');
    res.write('<img src="' + userResponse.body.avatar_url + '"/>')
    res.write('</div>');
    res.write('<h1>' + username + '</h1>');
    res.write('<p>' + bio + '</p>');
    res.write('<p>' + JSON.stringify(userResponse.body) + '</p>');
    res.end();
  })
  .catch(err => {
    res.write('<h1>Error</h1>');
    res.write('<p>' + err.body + '</p>');
    res.end();
  });
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});