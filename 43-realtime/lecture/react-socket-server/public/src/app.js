import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('client connected!');
})

class App extends Component {
  state = {
    clicks: 0,
    currentTime: Date.now().toString(),
  }

  componentDidMount() {
    socket.on('tick', (data) => {
      console.log('client got tick', data);
      this.setState({currentTime: data.currentTime});
    })

    socket.on('click-total', (data) => {
      console.log('client got click', data);
      this.setState({clicks: data.clicks});
    })
  }

  sendClick = () => {
    socket.emit('send-click');
  };

  render() {
    return <Fragment>
      <h1>My socket app</h1>
      <p>
        <button onClick={this.sendClick}>click me</button>
      </p>
      <p>
        Button has been clicked: {this.state.clicks}
      </p>
      <p>
        The current time is: {this.state.currentTime}
      </p>
    </Fragment>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);