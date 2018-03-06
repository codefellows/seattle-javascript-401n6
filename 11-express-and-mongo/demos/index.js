const express = require('express');
const app = express();

const bookAPI = require('./api/bookapi');

app.use('/api/books', bookAPI);

let PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});