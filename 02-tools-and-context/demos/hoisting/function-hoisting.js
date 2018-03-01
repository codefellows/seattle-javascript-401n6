// print0 is picked up in the first pass before execution
print0();

// these two aren't picked up in a pass phase
// JavaScript will wait until execution to define them
// print1();
// print2();

function print0() {
  console.log(0)
}

const print1 = function() {
  console.log(1)
}

const print2 = () => {
  console.log(2)
}

print0();
print1();
print2();
