class LinkedNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  toString() {
    let result = ''; 
    let current = this.root;
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    return result + 'null';
  }
}

module.exports = {LinkedList, LinkedNode};