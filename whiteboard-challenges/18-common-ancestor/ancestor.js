class BinaryNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }
  
  commonAncestor(val1, val2) {
    let accum = []
    this._commonAncestor(this.root, val1, val2, accum);
    return accum[accum.length - 1]
  }
  
  _commonAncestor(node, val1, val2, accum) {
    if (!node) {
      return
    }
  
    let currentHasBoth = this._contains(node, val1) && this._contains(node, val2)
    if (currentHasBoth) {
      accum.push(node)
    }
    
    this._commonAncestor(node.left, val1, val2, accum)
    this._commonAncestor(node.right, val1, val2, accum)
  }
  
  _contains(node, val) {
    if (!node) {
      return false
    } else if (node.value === val) {
      return true
    } else {
      return this._contains(node.left, val) || this._contains(node.right, val)
    }
  }
}

let root = new BinaryNode(10,
  new BinaryNode(5,
    new BinaryNode(11),
    new BinaryNode(13,
      new BinaryNode(2),
      new BinaryNode(15)
    )
  ),
  new BinaryNode(17)
)

let tree = new BinaryTree()
tree.root = root;
let result = tree.commonAncestor(11, 15)
console.log(result.value)
