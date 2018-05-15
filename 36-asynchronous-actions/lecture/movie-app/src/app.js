import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';
const store = createStore(reducers);

import ShowtimesPage from './components/ShowtimesPage';

class App extends React.Component {
  render() {
    return <Provider store={store}>
      <React.Fragment>
        <ShowtimesPage />
      </React.Fragment>
    </Provider>
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);