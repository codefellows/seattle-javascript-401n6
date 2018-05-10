class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Returns true if there are no nodes attached to
  // the root of the tree. Returns false if there are
  // any nodes in the tree.
  isEmpty() {
    return this.root === null;
  }

  // returns an array of all elements in the tree using
  // an in-order traversal (left, current, right)
  toArray() {
    let accumulator = [];
    this._toArray(this.root, accumulator);
    return accumulator;
  }

  // helper method that keeps track of the current node in the traversal
  // and maintains a reference to the array accumulating values.
  _toArray(node, accumulator) {
    if (!node) {
      return accumulator;
    }

    this._toArray(node.left, accumulator);
    accumulator.push(node.value);
    this._toArray(node.right, accumulator);

    return accumulator;
  }

  // search through the tree (via any traversal)
  // and return true if the value is found in the tree,
  // otherwise return false.
  contains(value) {
    return this._contains(value, this.root);
  }

  _contains(value, node) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    return this._contains(value, node.left) ||
           this._contains(value, node.right);
  }

  // add the given value at an appropriate place in the binary search tree.
  // the first value is always attached manually to the root. all following
  // values are added toward the left if they're less than the value at a node,
  // or toward the right if the value is greater than the current node.
  add(value) {
    if (this.isEmpty()) {
      this.root = new TreeNode(value);
    } else {
      this._add(value, this.root);
    }
  }

  _add(value, node) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this._add(value, node.left);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this._add(value, node.right);
      }
    }
  }

  // traverse two trees simultaneously.
  // return true if they contain the same values in the same place.
  // return false if they contain any inconsistent values.
  equals(otherTree) {
    return this._equals(this.root, otherTree.root);
  }

  _equals(t1, t2) {
    // if they're both non-existant then they are equal!
    if (!t1 && !t2) {
      return true;
    }
    if (t1.value !== t2.value) {
      return false;
    }

    return this._equals(t1.left, t2.left) &&
           this._equals(t1.right, t2.right);
  }

  // return the overall minimum value stored in the tree.
  // return undefined if the tree is empty.
  minValue() {
    if (this.isEmpty()) {
      return undefined;
    }
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  // return the overall maximum value stored in the tree.
  // return undefined if the tree is empty.
  maxValue() {
    if (this.isEmpty()) {
      return undefined;
    }
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  // use a traversal to count the total number of nodes stored in the tree.
  // DO NOT store a value like `numNodes` and increment it in add().
  // You MUST traverse the entire tree when you do this.
  numNodes() {
    return this._numNodes(this.root);
  }

  _numNodes(node) {
    if (!node) {
      return 0;
    }
    return 1 + this._numNodes(node.left) + this._numNodes(node.right);
  }

  // traverse the entire tree and count the total number of leaf nodes.
  // leaf nodes are nodes that have no child nodes on their left or right.
  numLeaves() {
    return this._numLeaves(this.root);
  }

  _numLeaves(node) {
    if (!node) {
      return 0;
    }
    if (node.left === null && node.right === null) {
      return 1;
    }
    return this._numLeaves(node.left) + this._numLeaves(node.right);
  }

  // BONUS: returns true if the tree has one node with the value
  // of the average value of all the nodes themselves. for example: 
  // true for tree with [2 4 6 8 10] because it has 6
  // false for tree with [1 2 3 4 5 6] because it has no 3.5
  doesTreeContainAverage() {
    // step 1: go through tree to determine average value.
    // step 2: go through tree again to see if it has that value.
    // step 3: return result
    let total = this._getTotal(this.root);
    let nodes = this.numNodes();
    let average = total / nodes;
    return this.contains(average);
  }

  _getTotal(node) {
    if (!node) {
      return 0;
    }
    return node.value + this._getTotal(node.left) + this._getTotal(node.right);
  }
}

module.exports = {
  TreeNode,
  BinarySearchTree,
}
