# Object Diff
Imagine you're writing a function as part of React. How can you tell when
the app should be rerendered? When states are different!

Write a function called `isDiff` that accepts two objects and returns `true` if
there's any difference between the objects.  same. It should return `false` if
the objects contain all the same key-value pairs.

You may assume the values in the objects contain only simple values like
strings, numbers and booleans. Assume the values in the objects are not
custom classes, arrays or other objects.

Expected input/output:

```
isDiff({foo: 'bar'}, {foo: 'bar'}) // false
isDiff({foo: 'bar'}, {foo: 'qqq'}) // true different values with a key
isDiff({foo: 'bar'}, {})           // true missing a key
isDiff({}, {foo: 'bar'})           // true missing a key
```

