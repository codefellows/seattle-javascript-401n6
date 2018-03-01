// This function is O(N) because it has to look
// once at every person in the array.
function isPresent(arr, person) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === person) {
      return true;
    }
  }
  
  return false;
}

// This function is O(N^2) because it has to 
// compare each element in the array to every
// other element in the array.
function containsDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return false;
      }    
    }
  }
  return true;
}

let people = ["Trevor", "Eric", "Ix", "Amber", "Alicia", "Ronnie", "Fred", "Raphael", "Aaron", "Daniel", "Mitch", "Ryan", "Caitlin", "Nick", "Cody", "Michael", "Darcy"];
console.log(isPresent(people, "Brandon"))



