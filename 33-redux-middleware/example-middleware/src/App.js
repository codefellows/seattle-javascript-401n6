import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux';

import reducers from './reducers/';
import middlewares from './middleware';
import {logger, crashReporter, thunk, timeout} from './middleware';

const store = createStore(reducers,
  //applyMiddleware(logger, thunk, timeout, crashReporter));
  applyMiddleware(middlewares.logger,
    middlewares.timeout,
    middlewares.thunk,
    middlewares.crashReporter
  )
);

import MainPage from './components/MainPage';

class App extends React.Component {
  render() {
    return (
			<Provider store={store}>
				<BrowserRouter>
					<Route exact path='/' component={MainPage}/>
				</BrowserRouter>
			</Provider>
    )
  }
}

export default App;