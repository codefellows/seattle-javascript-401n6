import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import ClickClicker from './ClickClicker';
import ClickDisplay from './ClickDisplay';

class App extends Component {
  render() {
    return <Fragment>
      <h1>My App</h1>
      <p>Welcome to my app.</p>
      <ClickClicker />
      <ClickDisplay />
    </Fragment>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
