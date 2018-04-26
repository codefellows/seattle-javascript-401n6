// primitive types (number, boolean) are copied by value
let x1 = 42;
let newX = x1;
newX += 7;

console.log('x1', x1);
console.log('newX', newX);
console.log();

// objects are assigned by reference
let a1 = [1, 2, 3, 4, 5];
let newArray = a1;
newArray.push(99);

console.log('a1', a1);
console.log('newArray', newArray);
console.log();

// where do strings lie? are they copied by value or by reference?
let s1 = 'cat';
let s2 = s1;
s2 += 's';

console.log('s1', s1);
console.log('s2', s2);


