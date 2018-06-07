import React, {Component, Fragment} from 'react';
import SpotItEngine from './spot-it-engine';

export default class SpotIt extends Component {
  constructor(props) {
    super(props);
    this.engine = new SpotItEngine();
    this.state = this.engine.getState();
  }

  handleClick = (symbol) => {
    this.engine.isMatch(symbol);
    this.setState(this.engine.getState());
  }

  handleImgClick = (ev) => {
    // notice that this gives values close to zero when you
    // click in the top-left corner of EACH image,
    // and values close to 1.0 when you click in the bottom-right
    // corner of EACH image.
    let percentX = ev.nativeEvent.offsetX / ev.target.width;
    let percentY = ev.nativeEvent.offsetY / ev.target.height;
    console.log('x%', percentX, 'y%', percentY);

    // TODO: attach a new function to the engine similar to isMatch
    // that accepts percentage coordinates, finds the closest symbol
    // for the current cards, gets the symbol, then passes that symbol
    // to the original handleClick function.
  }

  render = () => {
    return <Fragment>
      <div>
        Guesses Left: {this.state.guessesLeft}
      </div>
      <div>
        <img onClick={this.handleImgClick} src={this.state.card1Image} />
        <img onClick={this.handleImgClick} src={this.state.card2Image} />
      </div>
      <div>
        {this.state.card1.map((symbol,i) => {
          return <button key={i} onClick={() => this.handleClick(symbol)}>{symbol}</button>
        })}
      </div>
      <div>
        {this.state.card2.map((symbol, i) => {
          return <button key={i} onClick={() => this.handleClick(symbol)}>{symbol}</button>
        })}
      </div>
    </Fragment>
  }
}