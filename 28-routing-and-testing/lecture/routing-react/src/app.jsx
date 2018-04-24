import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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
    return <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Homepage</a></li>
            <li><a href="/contacts">Contacts</a></li>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>
        <h1>{this.state.title}</h1>
        <Route exact path="/" component={Homepage} />
        <Route path="/contacts" component={Contacts} />
      </div>
    </Router>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
