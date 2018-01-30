## Feature Tasks
#### Scope and Context
Given the code:

'use strict'

var foo = 'bar';

function bar() {
  var foo = 'baz';

  function baz(foo) {

    foo = 'bam';
    bam = 'yay';
  }
  baz();
}

bar();
foo;
bam;
baz();


#### Questions:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages
   of execution for this file called, and which order do they happen in?

**The two stages of execution are called creation (like compilation) and
activation/code execution.  The creation stage runs from top to bottom and
makes "buckets" for global and function/local context.  The execution is the
second pass where the execution context stack is created (hoisting occurs). The
global execution context is always on the bottom.  The current execution
context is on the top, with other execution context in a stack.**

http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/

2. Write an explanation, using as much space as you need, relating to how the
first stage of execution for this file operates.
  - For example, identify the high level steps in a line by line overview and
    then define what each of those steps are accomplishing.

**On line 3, variable foo is declared as a global variable and assigned the value 'bar'.
On line 5, function bar is declared and we enter the function/local scope.
On line 6, variable foo is declared as local to function bar and assigned the value 'baz'.
On line 8, function baz and another function scope is declared.  Because variable foo is passed as an argument, foo has the function scope of baz.
On line 10, variable foo is assigned the value 'bam'.
On line 11, bam is assigned the value 'yay' but since it hasn't been declared it should break the code. Line 12 closed function baz.
On line 13, function baz is called within function bar.  One line 14, function bar is closed.
On line 16, which is back in the global execution context, function bar is called.
On line 17, variable foo is called.  At this point, it's value is 'bar'.
On line 18. variable bam is called. Since it has never been declared it breaks the code.
On line 19, function baz is called, but since was declared inside function bar it is undefined in the global space and breaks the code.**

3. Write an explanation, using as much space as you need, relating to how the
   second stage of execution for this file operates.
  - For example, identify the high level steps in a line by line overview and
    then define what each of those steps are accomplishing.

**In this stage, functions are added to the call stack as functions are called.
First the global execution context is added to the bottom of the call stack.
Then, on line 16, function bar is called and added to the call stack.  Before
it can complete, function baz is called instead bar and added to the call
stack.  Once baz completes it is removed from the call stack, then bar can
complete and be removed from the call stack.  Next, on line 19 function baz is
called from the global space, but since baz is only function bar, it is
undefined in the global space and the code breaks.**

4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

**There have been three scopes registered by the engine.  They are the global
scope, the function scope of bar and the function scope of baz within the
function scope of bar.**

5. When line 13 invokes the `baz` function, which `foo` will be assigned
   a value of `bam`? More specifically, `bam` will be assigned to the `foo` in
   ??? scope. Give a brief description in your own words to support your
   conclusion.

**The foo in the function scope of baz will be assigned a value of `bam`, but
this will only be inside the function baz.  Once function baz completes, it
will exit to function bar and then `baz` will be assigned to foo.**  

6. Which scope, if any, will the variable `bam` on line 11 be registered to
   when the first stage of execution occurs on this file? Provide a brief
   description in your own words to support your conclusion.

**I believe that the variable `bam` is never defined in any scope.  This is
a result of the 'use strict' line.  With 'use strict', variables have to be
defined with var, let or const, or within a function declaration, passed as
arguments.  If 'use strict' was not include, I believe the bam would default to
a globally scoped variable.


7. For each line, 16 through 19, what is the return value for each?

**From line 16, bar() is called and exists but doesn't have a return value so I don't understand how to answer the question.
From line 17, foo has the value from the global space on line 3 bar.
From line 18, bam is not defined ever.
From line 19, baz() is not defined in the global space.**
