require('dotenv').config();

const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/upload', upload.single('picture'), function (req, res, next) {
  // req.file is the `picture` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
  res.send(req.file);
});

app.listen(process.env.PORT, () => {
  console.log('http://localhost:' + process.env.PORT);
});
