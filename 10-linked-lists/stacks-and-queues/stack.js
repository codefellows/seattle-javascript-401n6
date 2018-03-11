"((()("
"()"
"()(())"
")("

class Stack {
  constructor(capacity=5) {
    this.size = 0;
    this.data = [];
    for (let i = 0; i < capacity; i++) {
      this.data[i] = null;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    // the size of the stack increases by one
    // add the value to the end of the array
    this.data[this.size] = value;
    this.size++;
    console.log('push', this.size, this.data)
  }

  // remove the "top-most" value and return it
  pop() {
    let result = this.data[this.size - 1];
    this.data[this.size - 1] = null;
    this.size--;
    console.log('pop', this.size, this.data)
    return result;
  }
}

module.exports = Stack;