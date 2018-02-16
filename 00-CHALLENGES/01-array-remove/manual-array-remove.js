// removes an element from the array at the index
//        input: remove([32, 65, 89, 43], 0)
// intermediate: [null, 65, 89, 43]
//       result:[65, 89, 43]
function remove(arr, index) {
  // simply ignore any invalid indexes
  if (index < 0 || index >= arr.length) {
    return;
  }

  // set the array at that index to null
  arr[index] = null;

  // shift all the values after the index over so they
  // fill the space left by overwriting the value with null.
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // adjust the length of the array to show we manually removed an element.
  arr.length = arr.length - 1;
  return arr;
}

module.exports = remove;