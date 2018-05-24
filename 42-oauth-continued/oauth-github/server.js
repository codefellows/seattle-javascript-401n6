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
  })
  .then((res) => {
    console.log('token', res.body);
  
  });
});

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root:'./'});
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});
