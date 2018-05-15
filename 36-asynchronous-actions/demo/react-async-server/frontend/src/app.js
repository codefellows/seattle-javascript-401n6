import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <React.Fragment>
      <h1>React</h1>
      <p>{Date.now()}</p>
      <p>what</p>
      <p>what</p>
      <p>what</p>
    </React.Fragment>
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);
