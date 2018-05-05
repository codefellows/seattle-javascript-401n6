const {TreeNode, BinaryTree} = require('./binary-tree');

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
      return;
    }
    this._add(value, this.root);
  }

  // lesser values go to the left
  // greater values go to the right
  _add(value, node) {
    if (value < node.value) {
      if (node.left === null) {
        return node.left = new TreeNode(value);
      }
      this._add(value, node.left);
    } else if (value > node.value) {
      if (node.right === null) {
        return node.right = new TreeNode(value);
      }
      this._add(value, node.right);
    }
  }
}

module.exports = BinarySearchTree;