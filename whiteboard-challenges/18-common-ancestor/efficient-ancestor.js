class BinaryNode {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BinaryTree {
  constructor(){
    this.root = null
  }

  commonAncestor(val1, val2) {
    let path1 = this.buildPath(val1)
    let path2 = this.buildPath(val2)
    let deepestCommonAncestor = undefined

    // Iterate through the nodes in the two arrays until
    // the ancestry path differs (for example, after 4 here)
    // [2, 7, 6, 4, 5, 9]
    // [2, 7, 6, 4, 7, 6, 11]
    for (var i = 0; i < Math.min(path1.length, path2.length); i++) {
      if (path1[i] !== path2[i]) {
        break
      }
      deepestCommonAncestor = path1[i]
    }

    return deepestCommonAncestor
  }
  
  // Return an array of nodes starting from the root
  // going to the node containing the given value
  // [2, 7, 6, 4, 5, 9]
  buildPath(value) {
    let accum = []
    this._buildPath(this.root, value, accum)

    // reverse before returning so the root is
    // the first node in the list.
    accum.reverse()
    return accum
  }

  _buildPath(node, value, accum) {
    if (!node) { return false; }
    if (node.value === value) {
      accum.push(node)
      return true
    }

    let wasOnLeft = this._buildPath(node.left, value, accum)
    let wasOnRight = this._buildPath(node.right, value, accum)
    let wasOnEither = wasOnLeft || wasOnRight
    if (wasOnEither) {
      accum.push(node)
    }

    return wasOnLeft || wasOnRight
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
tree.root = root
let result = tree.commonAncestor(11, 15)
console.log(result.value)
