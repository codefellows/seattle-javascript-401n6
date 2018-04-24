function randVal() {
  if (Math.random() <= .5) {
    return -Math.floor(100 * Math.random());
  }
  return Math.floor(100 * Math.random());
}

let minesweeper = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

for (let row = 0; row < minesweeper.length; row++) {
  for (let col = 0; col < minesweeper[row].length; col++) {
    minesweeper[row][col] = randVal();
  }
}

console.log(minesweeper)
console.log(findLargestAdjacentNeighboringProduct(minesweeper))

function findLargestAdjacentNeighboringProduct(grid) {
  // sample the data to find the first maximum
  let max = computeProduct(grid, 0, 0);

  for (let row = 0; row < minesweeper.length; row++) {
    for (let col = 0; col < minesweeper[row].length; col++) {
      let localProduct = computeProduct(grid, row, col)
      max = Math.max(max, localProduct);
    }
  }
  return max;
}

function getCell(grid, row, col) {
  let defaultValue = 0;
  if (row < 0 || col < 0) {
    return defaultValue;
  }
  if (row >= grid.length) {
    return defaultValue;
  }
  if (col >= grid[row].length) {
    return defaultValue;
  }

  return grid[row][col];
}

function computeProduct(grid, row, col) {
  let center = getCell(grid, row, col);
  let right = getCell(grid, row, col + 1);
  let down = getCell(grid, row + 1, col);
  return Math.max(center * right, center * down);
}
