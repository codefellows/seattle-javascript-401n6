import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <Fragment>
      <h1>My App</h1>
      <p>Welcome to my app.</p>
    </Fragment>
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
