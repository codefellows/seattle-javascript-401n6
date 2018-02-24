class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.root = null;
  }

  // O(1)
  isEmpty() {
    return this.root === null; 
  }

  // O(1)
  // insert the value at the front of the list.
  prepend(value) {
    let node = new ListNode(value);
    node.next = this.root; 
    this.root = node;
    this.length++;
  }

  // O(1) if we optimize and create a .length property, but!
  // O(N) if we don't have control over a list and need
  //      to use a while loop to count through it
  size() {
    return this.length;
  }

  // O(N)
  get(index) {
    let counter = 0;
    let current = this.root;
    while (current !== null) {
      if (counter === index) {
        return current.data;
      }
      counter++;
      current = current.next;
    }
  }

  // O(N)
  insertAtEnd(value) {
    let current = this.root;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new ListNode(value);
    this.length++;
  }

  toString() {
    let result = '';
    // traverse the linked list and append data values to result str.
    let current = this.root;
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    return result;
  }
}

let list = new LinkedList();
list.prepend(99);
list.prepend(80);
list.prepend(40);
list.prepend(12);
console.log(list.toString());
console.log('Size:', list.size());

console.log(' first', list.get(0));
console.log('second', list.get(1));
console.log(' third', list.get(2));
console.log('fourth', list.get(3));

list.insertAtEnd(112);
console.log(list.toString());
console.log('Size:', list.size());