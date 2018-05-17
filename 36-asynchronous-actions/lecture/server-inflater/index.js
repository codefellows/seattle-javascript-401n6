let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());

app.get('*', (req, res) => {
  res.send([
    {
      id: '19827343892-12rw4231-43w',
      name: 'The Hobbit 2',
      startHour: 2,
      startMinute: 12,
      theaterId: 65
    }
  ]);
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log('http://localhost:3000');
});
