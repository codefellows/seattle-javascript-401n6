"use strict";

const containsVowels = require('./word.js').containsVowels;

describe("containsVowels function", () => {
  describe("it should return false when there's no vowels", () => {
    let expected = false;
    it("it should return false for an empty string", () => {
      let str = ''
      let result = containsVowels(str);
      expect(result).toBe(expected);
    })
    it("it should return false for 'b'", () => {
      let str = 'b'
      let result = containsVowels(str);
      expect(result).toBe(expected);
    })
    it("it should return false for 'dkjfdskfhk' ", () => {
      let str = 'dkjfdskfhk'
      let result = containsVowels(str);
      expect(result).toBe(expected);
    })
  })


  describe("it should return true when there are vowels", () => {
    let expected = true;
    it("it should return true for 'a'", () => {
      let str = 'a'
      let result = containsVowels(str);
      expect(result).toBe(expected);
    })

    it("it should return true for 'taxi' ", () => {
      let str = 'taxi'
      let result = containsVowels(str);
      expect(result).toBe(expected);
    })
  })
})