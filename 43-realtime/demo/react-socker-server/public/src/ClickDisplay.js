import React, {Component, Fragment} from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('display connected', socket.id);
});

export default class ClickDisplay extends Component {
  state = {
    clicks: 0
  }

  componentDidMount() {
    socket.on('click-info', (info) => {
      console.log('got click info', info);
      this.setState({clicks: info.clicks});
    })
  }

  render() {
    return <Fragment>
      <p>
        Total clicks: {this.state.clicks}
      </p>
    </Fragment>
  }
}
