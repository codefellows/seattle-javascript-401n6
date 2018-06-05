import React, {Component, Fragment} from 'react';
import socket from './socket-context';

export default class ClickDisplay extends Component {
  state = {
    clicks: 0
  }

  componentDidMount() {
    socket.on('click-info', (info) => {
      console.log('display got info', socket.id, info);
      this.setState({clicks: info.clicks});
    });
  }

  render() {
    return <p>
      Total clicks: {this.state.clicks}
    </p>
  }
}
