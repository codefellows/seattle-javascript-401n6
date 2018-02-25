class CoinFlipper {
  constructor(desiredHeadsInARow, name) {
    this.name = name || 'unnamed';
    this.desiredHeadsInARow = desiredHeadsInARow;
    this.reset();
  }
  
  reset() {
    this.flips = 0;
    this.currentHeadsInARow = 0;
  }

  flip() {
    let isHeads = Math.random() < .5;
    this.flips++;
    if (isHeads && this.currentHeadsInARow > 0) {
      this.currentHeadsInARow++;
    } else if (isHeads) {
      this.currentHeadsInARow = 1;
    } else {
      this.currentHeadsInARow = 0;
    }
  }

  flipToFinish() {
    return new Promise((resolve, reject) => {
      const flipAgain = () => {
        if (this.currentHeadsInARow < this.desiredHeadsInARow) {
          setTimeout(() => {
            this.flip();
            flipAgain();
          });
        } else {
          // resolve only supports up to one parameter.
          // bundle everything in an object or an array to resolve more.
          resolve({
            name: this.name,
            heads: this.currentHeadsInARow,
            flips: this.flips
          });
        }
      };

      flipAgain();
    });
  }
}

module.exports = CoinFlipper;
