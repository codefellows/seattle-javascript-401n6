let Stack = require('./stack');

let stack = new Stack();
stack.push(42)
stack.push(19)
stack.push(18)
stack.push(12)
stack.push(78)
stack.push(99999999)

console.log("Size:", stack.size)

stack.pop();
stack.pop();

console.log("Size:", stack.size)