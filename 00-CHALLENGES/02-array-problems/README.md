# Array Problems

## Contains Duplicates
Write a function called `containsDupes` that accepts one array
and returns `true` if there are no duplicate values in the array.
It should return `false` if there are any duplicated values in the array.

You may not assume that the array is sorted. There is a `O(N^2)` solution
if you use only the array. It's possible to write an `O(N)` solution if
you use `{}` as an additional data structure.

If you could assume that the array were sorted then you could write an
`O(N)` solution without the additional `{}` data structure.

```
containsDupes([])                            // false
containsDupes([1,2,3])                       // false
containsDupes([1, 1])                        // true
containsDupes([1, 12, 14, 15, 1, 1, 1, 1])   // true
```

## Merge Two Sorted Arrays
Write a function called `merge` that accepts two sorted arrays. The function
should merge them together into one new array that's also sorted.

```
let arr1 = [23, 45, 67, 89];
let arr2 = [12, 13, 14, 45, 67, 68, 100, 102, 103];
let result = merge(arr1, arr2);
console.log("Expected:", [12, 13, 14, 23, 45, 45, 67, 67, 68, 89, 101, 102, 103]);
console.log("  Actual:", result);
```

## Contains
Write a function called `indexOf` that accepts an array, a value, and returns
the index of the value in the array. Return `-1` if the value does not
exist in the array.

You may **not** assume the array is sorted. What's the complexity of your solution?

## Binary Search
Write a function called `binarySearch` that accepts an array, a value, and
returns the index of the value in the array. Return `-1` if the value does
not exist in the array.

This time you can assume the array is sorted. Use the binary search algorithm
to write a solution that has a complexity of `O(log N)`.

* [Wikipedia: Binary Search Algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)