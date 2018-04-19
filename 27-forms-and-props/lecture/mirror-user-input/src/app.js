import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mirror User Input'
    }
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);