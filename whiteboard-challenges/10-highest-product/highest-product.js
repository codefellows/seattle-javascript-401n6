// time complexity: O(N^2)
// space complexity: O(1)
function highestProduct1(arr) {
  // return undefined if there's not at least two things in the array.
  if (arr.length < 2) {
    return undefined;
  }

  // sampling values from the array to initialize product
  let product = arr[0] * arr[1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product = Math.max(product, arr[i] * arr[j]);
      }
    }
  }
  return product;
}

// time complexity: O(N log N) due to sorting
// space complexity: O(1)
function highestProduct2(arr) {
  // return undefined if there's not at least two things in the array.
  if (arr.length < 2) {
    return undefined;
  }

  arr.sort();

  let smallest = arr[0];
  let nextSmallest = arr[1];

  let largest = arr[arr.length - 1];
  let nextLargest = arr[arr.length - 2];

  return Math.max(smallest * nextSmallest, largest * nextLargest);
}

// time complexity: O(N)
// space complexity: O(1)
function highestProduct3(arr) {
  if (arr.length < 2) {
    return undefined;
  }

  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);

  // these numbers aren't guaranteed to actually be
  // positive or negative, but it doesn't really matter.
  // we'll keep track of the two highest and two smallest
  // and compare their products at the end.
  let largest = max;
  let nextLargest = min;

  let smallest = min;
  let nextSmallest = max;

  // start at i=2 because we've already peeled off the first two elements
  for (let i = 2; i < arr.length; i++) {
    // use >= rather than strictly > to allow for duplicate
    // values at different indexes to count.
    // [3, 1, 3] should return 9
    // the second three pushes the first three from largest to nextLargest
    let val = arr[i];
    if (val >= largest && val >= nextLargest) {
      nextLargest = largest;
      largest = val;
    } else if (val > nextLargest) {
      nextLargest = val;
    }

    if (val <= smallest && val <= nextSmallest) {
      nextSmallest = smallest;
      smallest = val;
    } else if (val <= nextSmallest) {
      nextSmallest = val;
    }
  }

  return Math.max(largest * nextLargest, smallest * nextSmallest);
}

module.exports = {
  highestProduct1,
  highestProduct2,
  highestProduct3
}
