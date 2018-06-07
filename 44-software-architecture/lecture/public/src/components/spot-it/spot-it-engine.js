export default class SpotItEngine {
  constructor() {
    this.isGameOver = false;
    this.resetTwoCards();
  }

  resetTwoCards = () => {
    this.card1 = ["igloo", "dragon", "art", "lightning", "knight", "man", "dog", "padlock"];
    this.card2 = ["padlock", "lips", "anchor", "music-note", "flower", "exclamation-point", "car", "key"];
    this.card1.sort(() => Math.random() < .5 ? -1 : 1);
    this.card2.sort(() => Math.random() < .5 ? -1 : 1);
    this.guessesLeft = 3;
  }

  getState = () => {
    return {
      card1: this.card1,
      card2: this.card2,
      guessesLeft: this.guessesLeft,
      isGameOver: this.isGameOver,
    }
  }

  isMatch = (symbol) => {
    if (this.isGameOver) {
      return;
    }

    this.guessesLeft--;
    if (this.guessesLeft === 0) {
      this.isGameOver = true;
    }

    const isInCard1 = this.card1.includes(symbol);
    const isInCard2 = this.card2.includes(symbol);
    const isMatch = isInCard1 && isInCard2;
    if (isMatch) {
      this.resetTwoCards();
    }
    return isMatch;
  }
}