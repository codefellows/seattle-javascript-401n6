const fs = require('fs');

countWords('./ulysses.txt');
countWords('./sherlock.txt');
countWords('./moby-dick.txt');
countWords('./pride-and-pred.txt');
countWords('./read-sherlock.js');

countWords('./ulysses.txt', () => {
  countWords('./sherlock.txt', () => {
    countWords('./moby-dick.txt', () => {
      countWords('./pride-and-pred.txt', () => {
        countWords('./read-sherlock.js');
      });
    });
  });
});

function countWords(filename, cb) {
  fs.readFile('./' + filename, (err, data) => {
    handleFileResult(filename, data.toString())
    if (cb) {
      cb();
    }
  });
}

function handleFileResult(filename, data) {
  let words = data.split(" ");
  console.log("WORDS:", words.length, "in", filename);
}