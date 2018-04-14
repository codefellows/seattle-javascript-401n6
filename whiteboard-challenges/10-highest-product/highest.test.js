const hps = require('./highest-product.js');

const hp1 = hps.highestProduct1;
const hp2 = hps.highestProduct2;
const hp3 = hps.highestProduct3;

describe("Highest Product", () => {
  it("is undefined lists with less than two numbers", () => {
    expect(hp1([])).toEqual(undefined);
    expect(hp2([])).toEqual(undefined);
    expect(hp3([])).toEqual(undefined);

    expect(hp1([1])).toEqual(undefined);
    expect(hp2([1])).toEqual(undefined);
    expect(hp3([1])).toEqual(undefined);
  });

  it("should work reasonably for two positive numbers", () => {
    expect(hp1([32, 34])).toEqual(32 * 34);
    expect(hp2([32, 34])).toEqual(32 * 34);
    expect(hp3([32, 34])).toEqual(32 * 34);
  });

  it("should work reasonably for two positive numbers", () => {
    expect(hp1([-32, -34])).toEqual(32 * 34);
    expect(hp2([-32, -34])).toEqual(32 * 34);
    expect(hp3([-32, -34])).toEqual(32 * 34);
  });

  it("should work reasonably for mixed-sign numbers", () => {
    expect(hp1([-32, 34])).toEqual(-32 * 34);
    expect(hp2([-32, 34])).toEqual(-32 * 34);
    expect(hp3([-32, 34])).toEqual(-32 * 34);
  });

  it("should pick negative numbers if there's two large ones", () => {
    expect(hp1([-32, -34, 2, 14])).toEqual(32 * 34);
    expect(hp2([-32, -34, 2, 14])).toEqual(32 * 34);
    expect(hp3([-32, -34, 2, 14])).toEqual(32 * 34);
  });

  it("should pick positive numbers if there's two large ones", () => {
    expect(hp1([32, 34, -200, 14])).toEqual(32 * 34);
    expect(hp2([32, 34, -200, 14])).toEqual(32 * 34);
    expect(hp3([32, 34, -200, 14])).toEqual(32 * 34);
  });
});
