let reader = require('./file-reader');

reader.read('text.txt')
.then(txt => {
  console.log('red:', txt);
})
.catch(err => {
  console.log('err:', err);
});
