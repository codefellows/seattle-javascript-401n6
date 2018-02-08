function sumArr(arr) {
  if (arr.length === 0) {
      return 0;
  }
  var sum = arr.reduce(function (a, b) {
      return a + b;
  }, 0);
  return sum;
}

function minArr(arr) {
  if (arr.length === 0) {
    return undefined;
  } 
  return Math.min(arr);
}

function isSorted(arr) {
  if (arr.length === 0) {
      return true;
  }
}

// These functions will be scope to just this file.
// Manually attach them to what is exported from the
// module to allow other files to use them
// Now another file can access them like
//
// const ArrayUtils = require('../path/to/array-utils.js');
// let sum = ArrayUtils.sumArr([1,2,3,4,5])
// let min = ArrayUtils.minArr([1,2,3,4,5])
// let isSorted = ArrayUtils.isSorted([1,2,3,4,5])
module.exports = {};
module.exports.sumArr = sumArr;
module.exports.minArr = minArr;
module.exports.isSorted = isSorted;
