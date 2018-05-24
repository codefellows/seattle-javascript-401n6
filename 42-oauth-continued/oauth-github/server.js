'use strict';

const express = require('express');
const superagent = require('superagent');
const dotenv = require('dotenv');
const app = express();

dotenv.load();

app.get('/oauth-callback', function(req, res) {
  console.log('callback', req.query.code);

  let code = req.query.code;
  let state = req.query.state;

  let url = 'https://github.com/login/oauth/access_token';
  superagent.post(url)
  .send({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI,
    code: code,
    state:  state,
    scopes: 'repo'
  })
  .then((response) => {
    console.log('token', response.body);

    let user = 'geluso';
    let userUrl = 'https://api.github.com/user';
    console.log('getting resources from:', userUrl);
    return superagent.get(userUrl)
    .set('Authorization', 'token ' + response.body.access_token)
  })
  .then(response => {
    console.log('access response', response);
    res.send(response.body);
    res.end();
  })
  .catch(err => {
    console.log(err.message);
    res.send(err.message);
  });
});

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root:'./'});
})

app.get('/cookie2', (req, res) => {
  res.cookie('my-custom-cookie', 'snickerdoodle', {maxAge: 900000})
  res.cookie('my-short-lived-cookie', 'ten seconds', {maxAge: 10000})
  res.cookie('my-longer-lived-cookie', 'one-hundred seconds!', {maxAge: 100000})
  res.send('<h1>cookies again</h1>')
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
