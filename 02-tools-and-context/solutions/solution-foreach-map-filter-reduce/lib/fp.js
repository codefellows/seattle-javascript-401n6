module.exports = fp = {};

fp.forEach = (els, cb)=> {
  for (let i = 0; i < els.length; i++) {
    // pass in the element at the index in the array
    // and also pass in the index i
    cb(els[i], i);
  }
};


fp.map = (els, cb)=> {
  const result = [];
  for (let i = 0; i < els.length; i++) {
    result.push(cb(els[i]));
  }
  return result;
};

fp.filter = (els, cb)=> {
  const result = [];
  for (let i = 0; i < els.length; i++) {
    if (cb(els[i])) {
      result.push(els[i]);
    }
  }
  return result;
};

fp.reduce = (els, cb, initialState)=> {
  for (let i = 0; i < els.length; i++) {
    initialState = cb(initialState, els[i]);
  }
  return initialState;
};

fp.slice = (els, begin, upTo)=> {
  const result = [];
  for (let i = begin; i < upTo; i++) {
    result.push(els[i]);
  }
  return result;
};

