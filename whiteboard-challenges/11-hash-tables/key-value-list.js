class KeyValueList {
  constructor() {
    this.data = [];
  }

  put(key, value) {
    let oo = {key: key, value: value};
    this.data.push(oo);
  }

  // return the value associated with the given key.
  // O(N) - worst case this has to look through the entire array
  // to find the key it's looking for
  get(key) {
    for (let i = 0; i < this.data.length; i++) {
      let el = this.data[i];
      if (el.key === key) {
        return el.value;
      }
    }
    return null;
  }

  size() {
    return this.data.length;
  }

  toString() {
    let middle = this.data.map(el => {
      return `{${el.key}, ${el.value}} `;
    });

    return '[' + middle + ']';
  }
}

module.exports = KeyValueList;