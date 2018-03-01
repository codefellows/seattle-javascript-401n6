const fs = require('fs');

fs.readFile('./sherlock.txt', (err, data) => {
  if (err) throw err;
  let str = data.toString();
  console.log(str);
});