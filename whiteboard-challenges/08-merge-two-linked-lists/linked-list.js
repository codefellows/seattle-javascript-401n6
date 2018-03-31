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
}

module.exports = {LinkedList, LinkedNode};