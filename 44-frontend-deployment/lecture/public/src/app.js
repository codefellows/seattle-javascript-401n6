import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

class HomePage extends Component {
  render() {
    return <Fragment>
      <h1>My App</h1>
      <p>Homepage paragraph</p>
      <p><Link to="/other">other</Link></p>
    </Fragment>
  }
}
class OtherPage extends Component {
  render() {
    return <Fragment>
      <h1>Other Page</h1>
      <p>I'm a paragraph too!</p>
      <p><Link to="/">home</Link></p>
    </Fragment>
  }
}
class App extends Component {
  render() {
    return <BrowserRouter>
      <Fragment>
        <h1>My Routed React App</h1>
        <Route exact path="/" component={HomePage} />
        <Route path="/other" component={OtherPage} />
      </Fragment>
    </BrowserRouter>
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);
