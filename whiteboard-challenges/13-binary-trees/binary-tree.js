class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  // recursive contains strategy
  // base cases
  //   1. the node we're on has the value so return true
  //   2. we ran out of nodes to check so return false
  // recursive case
  //   the node we're one didn't have the value
  //   but it does have left and/or right nodes to check
  //   so recurse on those and check them!
  contains(value) {
    return this._contains(value, this.root);
  }

  _contains(value, node) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    return this._contains(value, node.left) ||
           this._contains(value, node.right);
  }

  // return the tree as a String that looks like
  // 5 2 7
  toString() {
    return this._toString(this.root);
  }

  _toString(node) {
    if (node === null) {
      return '';
    }
    let result = '';
    result += this._toString(node.left);
    result += ' ' + node.value;
    result += this._toString(node.right);
    return result;
  }
}

module.exports = {
  TreeNode,
  BinaryTree
};