import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h1>Hello</h1>
      <p>hi.</p>
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
