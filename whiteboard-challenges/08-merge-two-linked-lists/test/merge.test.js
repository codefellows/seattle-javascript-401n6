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
    let str = result.toString();
    console.log(str);
    expect(str).toEqual('8 -> 9 -> 12 -> 13 -> 14 -> null');

    result = merge(l2, l1);
    str = result.toString();
    console.log(str);
    expect(str).toEqual('8 -> 9 -> 12 -> 13 -> 14 -> null');
  });
});