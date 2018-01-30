const fp = require('../lib/fp');

describe("fp", ()=> {
  const noop = ()=>{};
  const square = n=> n * n;
  const isEven = n=> n % 2 === 0;
  const sum = (a,b) => a + b;
  let toTen;

  beforeEach(()=> {
    toTen = [1,2,3,4,5,6,7,8,9,10];
  })

  describe("forEach", ()=> {
    test("executes func", ()=> {
      let x = 0;
      const result = fp.forEach([1,2,3], (el) => {
        x += el;
      });
      expect(x).toEqual(6);
    });
  });

  describe("map", ()=> {
    test("works for empty arrays", ()=> {
      const result = fp.map([], noop);
      expect(result.length).toBe(0);
      expect(result).toEqual([]);
    });
    test("executes func", ()=> {
      const result = fp.map([1,2,3], square);
      expect(result).toEqual([1,4,9]);
    });
  });

  describe("filter", ()=> {
    test("filters a full array to empty with falsey noop", ()=> {
      expect(toTen.length).toEqual(10);

      const result = fp.filter(toTen, noop);
      expect(result).toEqual([]);
      expect(result.length).toEqual(0);
    });
    test("can filter to even nums", ()=> {
      expect(toTen.length).toEqual(10);

      const result = fp.filter(toTen, isEven);
      expect(result).toEqual([2,4,6,8,10]);
    });
  });

  describe("reduce", ()=> {
    test("returns initialState on an empty list", ()=> {
      const result = fp.reduce([], noop, 42);
      expect(result).toEqual(42);
    });

    test("can sum nums [1,2,3,4]", ()=> {
      const result = fp.reduce([1,2,3,4], sum, 0);
      expect(result).toEqual(10);
    });
  });

  describe("slice", ()=> {
    test("end parameter is exclusive, not inclusive", ()=> {
      const result = fp.slice(toTen, 0, 0);
      expect(result).toEqual([]);
    });
    test("can pick off first element of list", ()=> {
      const result = fp.slice(toTen, 0, 1);
      expect(result).toEqual([1]);
    });
    test("can exlude first and last element", ()=> {
      const result = fp.slice(toTen, 1, toTen.length - 1);
      expect(result).toEqual([2,3,4,5,6,7,8,9]);
    });
  });

  describe("make sure LAB example usage actually works", () => {
    test("make sure LAB example usage actually works", () => {
      const array = [1, 2, 3, 4, 5];
      fp.forEach(array, el => console.log(el)); // prints 1 2 3 4 5 across many lines
          fp.map(array, el => el * 2);          // returns [2, 4, 6, 8, 10]
       fp.filter(array, el => el % 2 === 0);    // returns [2, 4]
       fp.reduce(array, (a, b) => a + b, 0);    // returns 15 (the sum of the numbers)
    })
  })
});
