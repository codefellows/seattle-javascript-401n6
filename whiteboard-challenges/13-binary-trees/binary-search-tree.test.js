const BinarySearchTree = require('./binary-search-tree');

describe("BinarySearchTree", () => {
  test("toString", () => {
    let tree = new BinarySearchTree();
    tree.add(12);
    tree.add(42);
    tree.add(-1);
    tree.add(0);
    tree.add(47);
    tree.add(20);

    let str = tree.toString();
    let expected = ' -1 0 12 20 42 47';
    expect(str).toEqual(expected);
  });
});