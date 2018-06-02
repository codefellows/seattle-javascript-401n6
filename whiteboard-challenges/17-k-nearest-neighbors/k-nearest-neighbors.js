function distance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function tally(list) {
  let tally_ = {}
  list.forEach(item => {
    if (tally_[item.label] === undefined) {
      tally_[item.label] = 0;
    }
    tally_[item.label]++;
  });
  return tally_;
}

function majority(tally_) {
  let mostCount = 0;
  let mostLabel = undefined;
  for (key in tally_) {
    if (tally_[key] > mostCount) {
      mostCount = tally_[key];
      mostLabel = key;
    }
  }
  return mostLabel;
}

function kNearestNeighbors(labeledPoints, k, unlabeledPoint) {
  // attach distances to all the labeledPoints
  labeledPoints = labeledPoints.map(pp => {
    pp.distance = distance(pp, unlabeledPoint);
    return pp;
  });

  // sort according to smallest distance
  labeledPoints.sort((a, b) => {
    if (a.distance < b.distance) { return -1 }
    else if (a.distance > b.distance) { return 1 }
    return 0;
  });

  // pick off k-nearest items
  let nearest = labeledPoints.slice(0, k);
  let tally_ = tally(nearest);
  return majority(tally_);
}

let unlabeledPoint = {x: 47.688438, y: -122.372999};
let labeledPoints = [
  {x: 47.677041, y: -122.382766, label: "Ballard"},
  {x: 47.673096, y: -122.379727, label: "Ballard"},
  {x: 47.691944, y: -122.359977, label: "Greenwood"}
]

console.log(1, kNearestNeighbors(labeledPoints, 1, unlabeledPoint));
console.log(2, kNearestNeighbors(labeledPoints, 2, unlabeledPoint));
console.log(3, kNearestNeighbors(labeledPoints, 3, unlabeledPoint));
