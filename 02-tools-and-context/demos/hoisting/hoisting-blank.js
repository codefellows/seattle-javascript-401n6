var foo = 'bar';

function bar() {
  var foo = 'baz';

  function baz() {
    foo = 'bam';
    bam = 'yay';
  }
  baz();
}

bar();
foo;
bam;
baz();
