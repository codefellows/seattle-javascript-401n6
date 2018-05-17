import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {inflateMovies} from './actions/movie-actions';

import reducers from './reducers';
const store = createStore(reducers);

fetch('http://localhost:3000')
.then(res => res.json())
.then(json => {
  console.log('json:', json);
  store.dispatch(inflateMovies(json));
})

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