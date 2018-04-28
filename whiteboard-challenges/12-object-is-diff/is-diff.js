function isDiff(o1, o2) {
  for (let key in o1) {
    if (o1[key] !== o2[key]) {
      return true;
    }
  }

  for (let key in o2) {
    if (o1[key] !== o2[key]) {
      return true;
    }
  }

  return false;
}

function isDiff(o1, o2, twisted=false) {
  for (let key in o1) {
    if (o1[key] !== o2[key]) {
      return true;
    }
  }

  // trick: swap the params to avoid writing the for loop again
  if (!twisted) {
    return isDiff(o2, o1, true);
  }

  return false;
}

module.exports = isDiff;
