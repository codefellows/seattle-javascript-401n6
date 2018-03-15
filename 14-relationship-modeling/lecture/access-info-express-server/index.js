const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routeExamples = require('./routes/examples');
app.use(routeExamples);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});