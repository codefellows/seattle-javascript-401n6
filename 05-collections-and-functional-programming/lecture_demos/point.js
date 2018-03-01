class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(p2) {
    let dx = this.x - p2.x;
    let dy = this.y - p2.y;  
    return Math.sqrt(dx * dx + dy * dy);
  }

  prettyPrint() {
    return `(${this.x},${this.y})`;
  }
}

let points = [
  new Point(42, 50),
  new Point(30, 100),
  new Point(0, 0),
];

for (let i = 1; i < points.length; i++) {
  let p1 = points[i];
  let p2 = points[i - 1];
  let dd = p1.distance(p2);
  console.log(p1.prettyPrint(), '->', p2.prettyPrint(), dd);
}
