import React, {Component, Fragment} from 'react';
import socket from './socket-context';

export default class ClickClicker extends Component {
  sendClick = () => {
    console.log('client clicked', socket.id);
    socket.emit('increment-click');
  }

  componentDidMount() {
    console.log('clicker id', socket.id);
  }

  render() {
    return <Fragment>
      <p>
        <button onClick={this.sendClick}>click me</button>
      </p>
    </Fragment>
  }
}