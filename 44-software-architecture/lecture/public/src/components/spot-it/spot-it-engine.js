export default class SpotItEngine {
  constructor() {
    this.card1 = null;
    this.card2 = null;
    this.createTwoCards();
  }

  createTwoCards = () => {
    this.card1 = ["igloo", "dragon", "art", "lightning", "knight", "man", "dog", "padlock"];
    this.card2 = ["padlock", "lips", "anchor", "music-note", "flower", "exclamation-point", "car", "key"];
    this.guessesLeft = 3;
  }

  getState = () => {
    return {
      card1: this.card1,
      card2: this.card2,
      guessesLeft: this.guessesLeft,
    }
  }

  isMatch = (symbol) => {
    this.guessesLeft--;

    const isInCard1 = this.card1.includes(symbol);
    const isInCard2 = this.card2.includes(symbol);
    const isMatch = isInCard1 && isInCard2;
    if (isMatch) {
      let cards = [this.card1, this.card2];
      this.card1 = cards[1];
      this.card2 = cards[0];
    }
    return isMatch;
  }
}