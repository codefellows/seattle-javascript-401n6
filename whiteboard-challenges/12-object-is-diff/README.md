# Object Diff
Write a function called `isDiff` that accepts two objects and returns
`true` if all the key-value pairs in the two objects are exactly the
same. It should return `false` if any values are different, or the objects
have any different keys.

You may assume the values in the objects contain only simple values like
strings, numbers and booleans. Assume the values in the objects are not
custom classes, arrays or other objects.

Expected input/output:

```
isDiff({foo: 'bar'}, {foo: 'bar'}) // false
isDiff({foo: 'bar'}, {foo: 'qqq'}) // true different values with a key
isDiff({foo: 'bar'}, {}) // true missing a key
```

