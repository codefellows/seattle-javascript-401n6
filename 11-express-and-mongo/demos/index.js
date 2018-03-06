const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const bookAPI = require('./api/bookapi');

// Use body-parser to automatically parse JSON off incoming requests
app.use(bodyParser.json());

app.use('/api/books', bookAPI);

let PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});