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

  render = () => {
    return <Fragment>
      <div>
        Guesses Left: {this.state.guessesLeft}
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