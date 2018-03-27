require('dotenv').config();

const express = require('express');
const multer = require('multer');

const app = express();
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(process.env.PORT, () => {
  console.log('http://localhost:' + process.env.PORT);
});