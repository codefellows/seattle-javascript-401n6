import React from 'react';
import ReactDOM from 'react-dom';
import ListRenderer from './ListRenderer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Rendering Lists"
    };
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <ListRenderer />
    </div>
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
