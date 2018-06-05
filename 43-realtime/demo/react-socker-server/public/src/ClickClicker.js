import React, {Component, Fragment} from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('clicker connected', socket.id);
});

export default class ClickClicker extends Component {
  sendClick = () => {
    console.log('client clicked');
    socket.emit('increment-click');
  }

  render() {
    return <Fragment>
      <p>
        <button onClick={this.sendClick}>click me</button>
      </p>
    </Fragment>
  }
}