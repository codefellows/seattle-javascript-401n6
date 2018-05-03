import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import counterApp from '../reducers/counter-app';
const store = createStore(counterApp);

import Dashboard from './Dashboard';

class App extends React.Component {
  //componentDidMount() {
  //  store.subscribe(() => console.log('__STATE__: ', store.getState()))
  //  store.dispatch({type: null})
  //}

  render() {
    return (
			<Provider store={store}>
				<BrowserRouter>
					<Route exact path='/' component={Dashboard}/>
				</BrowserRouter>
			</Provider>
    )
  }
}

export default App

