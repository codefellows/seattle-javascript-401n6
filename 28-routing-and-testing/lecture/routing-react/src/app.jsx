import React from 'react';
import ReactDOM from 'react-dom';

import Homepage from './components/homepage.jsx';
import Contacts from './components/contacts.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My Routed React App'
    }
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <Homepage />
      <Contacts />
    </div>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
