const remove = require('./manual-array-remove');

describe("manual array remove", () => {
  describe("ignore invalid indexes", () => {
    it("should not affect empty arrays", () => {
      let array = [];
      remove(array, 0);

      expect(array.length).toEqual(0)
      expect(array).toEqual([]);
    });

    it("should ignore negative indexes", () => {
      let array = [1,2,3];
      remove(array, -1);
      
      expect(array.length).toEqual(3);
      expect(array).toEqual([1,2,3]);
    });

    it("should ignore large indexes", () => {
      let array = [1,2,3]
      remove(array, 3);

      expect(array.length).toEqual(3);
      expect(array).toEqual([1,2,3]);
    });
  });

  it("should remove elements at the front of the array", () => {
    let array = [1,2,3,4,5];
    remove(array, 0)

    expect(array.length).toEqual(4);
    expect(array).toEqual([2,3,4,5]);
  });

  it("should remove elements in the middle of the array", () => {
    let array = [1,2,3,4,5];
    remove(array, 2);

    expect(array.length).toEqual(4);
    expect(array).toEqual([1,2,4,5]);
  });

  it("should remove elements at the end of the array", () => {
    let array = [1,2,3,4,5];
    remove(array, 4);

    expect(array.length).toEqual(4);
    expect(array).toEqual([1,2,3,4]);
  });
});