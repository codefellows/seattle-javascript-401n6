# ![CF](http://i.imgur.com/7v5ASc8.png) Implement Binary Search Tree 
Implement all of the following methods for this BinarySearchTree class.
Remember, a BinarySearchTree stores nodes according to their values. Lesser
values are stored toward the left of each node, greater values are stored to
the right.

Tests are written for you. Run them with `jest`. Change red to green!

## Helper Methods
Remember you can use helper methods to help you solve problems, like this:

```js
traverse() {
  this._traverse(this.root);
}

_traverse(node) {
  if (!node) {
    return;
  }
  _traverse(node.left);
  _traverse(node.right);
}
```

## Anatomy
- This is a binary Search Tree
- It has four total nodes
- It has two leaf nodes with no children, 2 and 6

```text
    5
   / \
  2   7
     /
    6
```


