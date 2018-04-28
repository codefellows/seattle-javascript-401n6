import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import MenuData from './data/jack-in-the-box'
import MenuSystem from './components/menu/MenuSystem';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MenuSystem menuData={MenuData} />
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
