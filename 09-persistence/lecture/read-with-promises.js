const fs = require('fs');

// countWords('./sherlock.txt');
// countWords('./moby-dick.txt');
// countWords('./pride-and-pred.txt');
// countWords('./read-sherlock.js');

// countWords('./ulysses.txt', () => {
//   countWords('./sherlock.txt', () => {
//     countWords('./moby-dick.txt', () => {
//       countWords('./pride-and-pred.txt', () => {
//         countWords('./read-sherlock.js');
//       });
//     });
//   });
// });

readText('./ulysses.txt')
.then(handleFileResult)
.then(() => {
  return readText('./sherlock.txt')
})
.then(handleFileResult)
.then(() => {
  return readText('./moby-dick.txt')
})
.then(handleFileResult);

// Returns a promise that resolves with a string
// of the text in the given file.
function readText(filename) {
  let promise = new Promise((resolve) => {
    fs.readFile('./' + filename, (err, data) => {
      resolve({
        filename: filename,
        text: data.toString()
      });
    });
  });
  return promise;
}

function handleFileResult(result) {
  let filename = result.filename;
  let data = result.text;
  let words = data.split(" ");
  console.log("WORDS:", words.length, "in", filename);
}