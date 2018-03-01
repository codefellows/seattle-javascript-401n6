# Manual Array Remove

Write a function called `remove` that accepts an array and an index.
The function should replace the element at the index in the array with
`null` and then shift all values after that index over so `null` is
overwritten and there's not a gap left in the array. Decrement the
`.length` property on the array to indicate that the array now has one
less value in it.

Perform the entire removal using only a for loop, and array read and
write access syntax like `a[i]` and `a[i] = "foo"`.

**DO NOT** use any array methods at all. Do not use anything like
`[].splice`, `[].pop()`, or `[].push()`. The point of this challenge
is for you to understand how those helpful built-in array methods
are actually implemented under the hood.

### Example Illustration
If you have an array with `[32, 65, 89, 43]` and overwrote the element at
index `0` then you'd have an intermediate array with a `null` value. Use a
for loop to shift every other value one position left so the final result
doesn't have a "hole" in the array with an empty `null` value.

```
       input: remove([32, 65, 89, 43], 0)
intermediate: [null, 65, 89, 43]
      result:[65, 89, 43]
```

```
function remove(arr, index) {
  // your code here
}

console.log("Expected:", [23, 75, 76])
console.log("  Actual:", remove([23, 45, 75, 76], 1))
```