"use strict";

const ArrayUtils = require('./accessible-export.js');

describe("we should be able to access exported functions", () => {
  it("each function should be accessible", () => {
    let sum = ArrayUtils.sumArr([1,2,3,4,5]);
    let min = ArrayUtils.minArr([1,2,3,4,5]);
    let isSorted = ArrayUtils.isSorted([1,2,3,4,5]);
    let notSorted = ArrayUtils.isSorted([92, 3, 2, 3]);

    expect(sum).toBe(15);
    expect(min).toBe(1);
    expect(isSorted).toBe(true);
    expect(notSorted).toBe(false);
  });
});
