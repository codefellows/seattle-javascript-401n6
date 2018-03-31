const {LinkedList, LinkedNode} = require('../linked-list');
const merge = require('../merge');

describe('Merge', () => {
  it('', () => {
    let l1 = new LinkedList();
    l1.root = new LinkedNode(8,
      new LinkedNode(12,
      new LinkedNode(14)));
    let l2 = new LinkedList();
    l2.root = new LinkedNode(9,
      new LinkedNode(13));

    let result = merge(l1, l2);
    let current = result.root;
    expect(current.value).toBe(8);
    current = current.next;
    expect(current.value).toBe(9);
    current = current.next;
    expect(current.value).toBe(12);
    current = current.next;
    expect(current.value).toBe(13);
    current = current.next;
    expect(current.value).toBe(14);
  });
});