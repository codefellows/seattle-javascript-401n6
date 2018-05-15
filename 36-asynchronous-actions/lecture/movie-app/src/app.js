import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

// const store = createStore(
//   reducers
// )

import ShowtimesPage from './components/ShowtimesPage';

class App extends React.Component {
  render() {
    return <ShowtimesPage />;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);