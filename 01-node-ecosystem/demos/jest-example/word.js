"use strict";

// Write a function called containsVowels
// that accepts a string
// and returns true if the string contains vowels
// or returns false if it does not
function containsVowels(str) {
  if (str.length === 0) {
    return false;
  }

  let vowels = 'aeiou';
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    for (let j = 0; j < vowels.length; j++) {
      let vowel = vowels.charAt(j);
      if (char === vowel) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {};
module.exports.containsVowels = containsVowels;