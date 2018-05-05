const {TreeNode, BinaryTree} = require('./binary-tree');

describe("BinaryTree", () => {
  test("isEmpty", () => {
    let tree = new BinaryTree();
    expect(tree.isEmpty()).toBe(true);
  })

  test("isEmpty", () => {
    let tree = new BinaryTree();
    tree.root = new TreeNode(1);
    expect(tree.isEmpty()).toBe(false);
  });

  test("does not contain", () => {
    let tree = new BinaryTree();
    expect(tree.contains(99)).toBe(false);
  });

  //      5
  //     / \
  //    2   7
  test("does contain", () => {
    let tree = new BinaryTree();
    tree.root = new TreeNode(5);
    tree.root.left = new TreeNode(2);
    tree.root.right = new TreeNode(7);
    expect(tree.root.value).toBe(5);

    expect(tree.contains(5)).toBe(true);
    expect(tree.contains(2)).toBe(true);
    expect(tree.contains(7)).toBe(true);

    expect(tree.contains(99)).toBe(false);
  });

  test("toString", () => {
    let tree = new BinaryTree();
    tree.root = new TreeNode(5);
    tree.root.left = new TreeNode(2);
    tree.root.right = new TreeNode(7);

    let str = tree.toString();
    let expected = ' 2 5 7';
    expect(str).toEqual(expected);
  });
});