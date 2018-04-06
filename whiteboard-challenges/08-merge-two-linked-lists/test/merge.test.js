const {LinkedList, LinkedNode} = require('../linked-list');
const merge = require('../merge');

function getL1() {
  let l1 = new LinkedList();
  l1.root = new LinkedNode(8,
    new LinkedNode(12,
    new LinkedNode(14)));
  return l1;
}

function getL2() {
  let l2 = new LinkedList();
  l2.root = new LinkedNode(9,
    new LinkedNode(13));
  return l2;
}

describe('Merge', () => {
  it('Handles left-param longer', () => {
    let result = merge(getL1(), getL2());
    let str = result.toString();
    console.log(str);
    expect(str).toEqual('8 -> 9 -> 12 -> 13 -> 14 -> null');
  });

  it('Handles right-param longer', () => {
    let result = merge(getL2(), getL1());
    let str = result.toString();
    console.log(str);
    expect(str).toEqual('8 -> 9 -> 12 -> 13 -> 14 -> null');

    result = merge(l2, l1);
    str = result.toString();
    console.log(str);
    expect(str).toEqual('8 -> 9 -> 12 -> 13 -> 14 -> null');
  });

  it('Handles left-param empty lists', () => {
    let empty = new LinkedList();
    let result = merge(empty, getL1());
    let str = result.toString();
    console.log(str);
    expect(str).toEqual('8 -> 12 -> 14 -> null');
  });

  it('Handles right-param empty lists', () => {
    let empty = new LinkedList();
    let result = merge(getL1(), empty);
    let str = result.toString();
    console.log(str);
    expect(str).toEqual('8 -> 12 -> 14 -> null');
  });
});
