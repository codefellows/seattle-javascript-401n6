// This is the logic that JS follows when your code runs
// First we need to compile the code, which caches the variable and functions declarations and their respective scope
var foo = 'bar'; /* Global Scope: Do you know about `foo`? NO: cache ref */

function bar() { /* Global Scope: Do you know about `bar`? NO: cache ref */
  var foo = 'baz'; /* bar Scope: Do you know about `foo`? NO: cache ref */

  function baz() { /* bar Scope: Do you know about `baz`? NO: cache ref */
    /* baz Scope: Do you know about `foo` (parameter)? NO: cache ref */
    foo = 'bam'; /* baz Scope: Do you know about `foo`? YES */
    bam = 'yay'; /* baz Scope: Do you know about `bam`? NO: cache ref in global scope */
  }
  baz(); /* IGNORE: not invoking functions at compilation */
}

bar(); /* IGNORE: not invoking functions at compilation */
foo; /* IGNORE: not a formal variable declarations */
bam; /* IGNORE: not a formal variable declarations */
baz(); /* IGNORE: not invoking functions at compilation */


// ============================================================================================================================
// Next we follow the execution path for each line of code
// Execution starts on Line 1
var foo = 'bar'; /* Global Scope: Left hand ref for `foo`, you know it? YES: Assign 'bar' */

function bar() { /* `bar` has been compiled, so we move past it until the function is invoked */
  var foo = 'baz';

  function baz(foo) {
    foo = 'bam';
    bam = 'yay';
  }
  baz();
}

bam; // undefined
bar(); /* Gloabl Scope: Right hand ref for `bar`, you know it? YES: Cached function, now we execute (look at `bar`) */
foo; // 'bar'
bam; // 'yay'
baz(); // Reference Error
