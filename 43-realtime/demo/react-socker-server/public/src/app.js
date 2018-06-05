import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('connected');
});

socket.on('clicked', () => {
  console.log('connected');
});

class App extends Component {
  state = {
    clicks: 0
  }

  componentDidMount() {
    socket.on('click-info', (info) => {
      console.log('got click info', info);
      this.setState({clicks: info.clicks});
    })
  }

  sendClick = () => {
    console.log('client clicked');
    socket.emit('increment-click');
  }

  render() {
    return <Fragment>
      <h1>My App</h1>
      <p>Welcome to my app.</p>
      <p>
        <button onClick={this.sendClick}>click me</button>
      </p>
      <p>
        Total clicks: {this.state.clicks}
      </p>
    </Fragment>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
