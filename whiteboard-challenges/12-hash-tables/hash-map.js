class HashMap {
  constructor() {
    let SIZE = 13;

    this.data = [];
    for (let i = 0; i < SIZE; i++) {
      this.data[i] = null;
    }
  }

  put(key, value) {
    let oo = {key: key, value: value};
    let index = this.getIndex(key);
    console.log('storing key:', key, 'at index: ', index);
    this.data[index] = oo;
  }

  // O(1) - constant time access no matter how full the 
  // hash map gets. No matter what it simply computes
  // the hash code, turns that into an index in the array
  // and directly accesses the array at that index.
  // 
  // TODO: implement a way to handle collisions
  // linear probing or buckets
  get(key) {
    let index = this.getIndex(key);
    let data = this.data[index].value;
    if (!data.value) {
      return null;
    }
    return data.value;
  }

  size() {
    return this.data.length;
  }

  toString() {
    return this.data.map(el, i => {
      if (!el) {
        return `${i}: null`;
      }
      return `${i} {${el.key}, ${el.value}} \n`;
    });
  }

  // assume all all keys are strings
  hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      let charCode = key.charCodeAt(i);
      hash += charCode;
    }
    console.log('key:', key, 'hash:', hash);
    return hash;
  }

  getIndex(key) {
    let hash = this.hashCode(key);
    let index =  hash % this.data.length;
    console.log('key:', key, 'index:', index);
    return index;
  }
}

module.exports = HashMap;
