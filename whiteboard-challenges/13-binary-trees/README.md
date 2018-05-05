# Binary Trees
## Resources
* [Wikipedia: Tree (data structure)](https://en.wikipedia.org/wiki/Tree_(data_structure))
* [Wikipedia: minmax](https://en.wikipedia.org/wiki/Minimax)

## Types of Trees
* Binary Trees
* Binary Search Trees
* K-aryTrees

## Tree Travelsals
* pre-order traversal   (current, left, right)
* in-order traversal    (left, current, right)
* post-order traversal  (left, right, current)

These traversals simply determine the order that nodes are visited. In an
in-order traversal, the algorithm visits all left nodes first, then the
center node, then all right nodes.

```js
traverse(node) {
  if (node === null) {
    return false;
  } else if (node.value) {
    return true;
  }
  return traverse(node.left) ||
         traverse(node.right)
}
```

## Binary Search Tree
* Big-O(log N) search
* the opposite of exponential
* "cuts in half at every step"

```txt
1 000 000
  500 000
  250 000
  120 000
   60 000
   30 000
   16 000
    4 000
    2 000
    1 000
```

## Example Binary Tree Problems
### Manipulators
- implement add

### Examiners
- implement contains
- find minimum value
- find maximum value
- find duplicates
- count number of nodes in the tree
- count number of leaves in the tree
- find the depth of a tree (how many levls)

### Aggregators
- return an array of all even numbers
- return an array of all leaves in tree
- return nodes at a specific level

### Famous Tree Algorithms
- minmax AI decision making

### Hard Section
- implement remove
- determine closest common ancestor
