# Whiteboard Challenge: Bracket Matching
Write a function called `isBalanced` that accepts a
string of left and right brackets and returns true if
the brackets are balanced.

Use a stack!
Push whenever you see an opening curly brace.
Pop whenever you see a closing curly brace.
If you see a closing curly brace when the stack is empty,
  that's an error.

let stack = [];

* `""` returns `true`
* `"{"` returns `false`
* `"}"` returns `false`
* `"{}"` returns `true`
* `"}{"` returns `false`
* `"{{}}"` returns `true`
* `"{{}"` returns `false`
* `"}{}"` returns `false`
