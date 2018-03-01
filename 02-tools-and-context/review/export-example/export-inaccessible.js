function ArrayUtil(arr) {
  // This function is not accessible outside the scope
  // of ArrayUtil. No one else can access it!
  function sumArr(arr) {
    if (arr.length === 0) {
        return 0;
      }
    var sum = arr.reduce(function (a, b) {
        return a + b;
      }, 0);
  }

  // This function is not accessible outside the scope
  // of ArrayUtil. No one else can access it!
  function minArr(arr) {
    if (arr.length === 0) {
        return undefined;
      } 
    return Math.min(arr);
  }
  
  // This function is not accessible outside the scope
  // of ArrayUtil. No one else can access it!
  function isSorted(arr) {
    if (arr.length === 0) {
        return true;
    }
  }
}

module.exports = {};
module.exports.ArrayUtil = ArrayUtil;