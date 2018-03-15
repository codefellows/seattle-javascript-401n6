const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
  let id = req.query.id;
  if (id) {
    // get one
  } else {
    // get all
  }
  console.log('GET queryparams', req.query);
  res.send('GET response');
});

Router.delete('/', (req, res) => {
  let id = req.query.id;
  console.log('DELETE queryparams', req.query);
  res.send('DELETE response');
});

Router.post('/', (req, res) => {
  let body = req.body;
  console.log('POST queryparams', req.query);
  console.log('POST body', body);
  res.send('POST response');
});

Router.put('/', (req, res) => {
  let body = req.body;
  console.log('PUT queryparams', req.query);
  console.log('PUT body', body);
  res.send('PUT response');
});

module.exports = Router;