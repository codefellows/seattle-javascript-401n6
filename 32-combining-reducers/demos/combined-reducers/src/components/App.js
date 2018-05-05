import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import combinedReducer from '../reducers/';
const store = createStore(combinedReducer);

import MainPage from './MainPage';

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