const {TreeNode, BinarySearchTree} = require('./binary-search-tree');

describe('Binary Search Tree', () => {
  describe('toArray()', () => {
    test('', () => {
      expect(emptyTree().toArray()).toEqual([]);
      expect(oneTree().toArray()).toEqual([5]);
      expect(twoTree().toArray()).toEqual([5,7]);
      expect(fullTree().toArray()).toEqual([2,5,6,7]);
    });
  });

  describe('isEmpty()', () => {
    test('empty tree is empty', () => {
      expect(emptyTree().isEmpty()).toBe(true);
    })
    test('non-empty tree isn\'t empty', () => {
      expect(oneTree().isEmpty()).toBe(false);
      expect(twoTree().isEmpty()).toBe(false);
      expect(fullTree().isEmpty()).toBe(false);
    })
  });

  describe('contains()', () => {
    test('empty tree never has anything', () => {
      expect(emptyTree().contains(0)).toBe(false);
      expect(emptyTree().contains(2)).toBe(false);
      expect(emptyTree().contains(3)).toBe(false);

      expect(oneTree().contains(5)).toBe(true);
      expect(oneTree().contains(0)).toBe(false);
      expect(oneTree().contains(99)).toBe(false);

      expect(twoTree().contains(5)).toBe(true);
      expect(twoTree().contains(7)).toBe(true);

      expect(twoTree().contains(0)).toBe(false);
      expect(twoTree().contains(99)).toBe(false);

      expect(fullTree().contains(2)).toBe(true);
      expect(fullTree().contains(5)).toBe(true);
      expect(fullTree().contains(6)).toBe(true);
      expect(fullTree().contains(7)).toBe(true);

      expect(fullTree().contains(0)).toBe(false);
      expect(fullTree().contains(99)).toBe(false);
    })
  });

  describe('add()', () => {
    test('non-empty tree isn\'t empty', () => {
      let tree = new BinarySearchTree();
      expect(tree.isEmpty()).toBe(true);

      tree.add(5);

      expect(tree.root.value).toBe(5);

      expect(tree.isEmpty()).toBe(false);
      expect(tree.contains(5)).toBe(true);

      tree.add(7);
      expect(tree.root.right.value).toBe(7);
      expect(tree.contains(7)).toBe(true);

      tree.add(6);
      expect(tree.root.right.left.value).toBe(6);
      expect(tree.contains(6)).toBe(true);
    })
  });

  describe('minValue()', () => {
    test('returns undefined if empty', () => {
      expect(emptyTree().minValue()).toBe(undefined);
    });

    test('returns value', () => {
      expect(addedFullTree().minValue()).toBe(2);
    });

    test('many-value stress test', () => {
      let {tree, min} = hugeTreeWithStats();
      expect(tree.minValue()).toBe(min);
    });
  });

  describe('maxValue()', () => {
    test('returns undefined if empty', () => {
      expect(emptyTree().maxValue()).toBe(undefined);
    });

    test('returns value', () => {
      expect(addedFullTree().maxValue()).toBe(7);
    });

    test('many-value stress test', () => {
      let {tree, max} = hugeTreeWithStats();
      expect(tree.maxValue()).toBe(max);
    });
  });

  describe('numNodes()', () => {
    test('empty tree is empty', () => {
      expect(emptyTree().numNodes()).toBe(0);
    })
    test('non-empty tree isn\'t empty', () => {
      expect(oneTree().numNodes()).toBe(1);
      expect(twoTree().numNodes()).toBe(2);
      expect(fullTree().numNodes()).toBe(4);
    })
  });

  describe('numLeaves()', () => {
    test('empty tree is empty', () => {
      expect(emptyTree().numLeaves()).toBe(0);
    })
    test('non-empty tree isn\'t empty', () => {
      expect(oneTree().numLeaves()).toBe(1);
      expect(twoTree().numLeaves()).toBe(1);
      expect(fullTree().numLeaves()).toBe(2);
    })
  });

  describe('BONUS: doesTreeContainAverage', () => {
    test('tree does contain average', () => {
      let tree = new BinarySearchTree();
      tree.add(2);
      tree.add(4);
      tree.add(6);
      tree.add(8);
      tree.add(10);
      expect(tree.doesTreeContainAverage()).toBe(true);
    });

    test('tree does not contain average', () => {
      let tree = new BinarySearchTree();
      tree.add(1);
      tree.add(2);
      tree.add(3);
      tree.add(4);
      tree.add(5);
      tree.add(6);
      expect(tree.doesTreeContainAverage()).toBe(false);
    });
  });
});

// Tree-generating helper functions.
function emptyTree() {
  return new BinarySearchTree();
}

function oneTree() {
  let tree = new BinarySearchTree();
  let five = new TreeNode(5);
  tree.root = five;

  return tree;
}

function twoTree() {
  let tree = oneTree();
  let seven = new TreeNode(7);
  tree.root.right = seven;
  return tree;
}

// manually attach all the nodes so the tests don't
// depend on student's implementing add() correctly
// while they make it.
function fullTree() {
  let tree = twoTree();
  let two = new TreeNode(2);
  let six = new TreeNode(6);
  tree.root.left = two;
  tree.root.right.left = six;
  return tree;
}

// get a full tree that depends on their add() function
// being implemented properly
function addedFullTree() {
  let tree = twoTree();
  tree.add(5);
  tree.add(7);
  tree.add(6);
  tree.add(2);
  return tree;
}

function hugeTreeWithStats() {
  let tree = new BinarySearchTree();
  let value = Math.random();
  let [min, max] = [value, value];
  tree.add(value);

  for (let i = 0; i < 10000; i++) {
    value = Math.random();
    min = Math.min(min, value);
    max = Math.max(max, value);
    tree.add(value);
  }
  return {tree, min, max};
}
