function draw(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function collide(animals, bullets) {
  for (bullet) {
    for (animal) {
      
    }
  }
}

let animals = [];
let bullets = [];

// The Big-O of this function is really O(2N) because
// it calls a O(N) function twice. However, Big-O notation
// simply ignores whatever number is the scaling factor of N (2 here)
// because O(2N) is worse than O(2N^2). The exponent has such
// a larger effect on the total runtime than the 2 that we only write
// the N or N^2 and don't every multiply it by anything in front.
function drawEverything() {
  draw(animals)
  draw(bullets)
}












