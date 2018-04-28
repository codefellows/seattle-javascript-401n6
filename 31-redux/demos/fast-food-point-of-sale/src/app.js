import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import MenuData from './data/jack-in-the-box'
import MenuList from './components/menu/MenuList';
import OrderTotal from './components/menu/OrderTotal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [
        MenuData.items[0],
        MenuData.items[1],
        MenuData.items[0]
      ]
    };
  }

  render() {
    return <div className="menu container-fluid">
      <div className="row">
        <div className="col-xs-6">
          <h1>{MenuData.name}</h1>
          <MenuList items={MenuData.items} />
        </div>
        <div className="col-xs-6">
          <h1>Current Order</h1>
          <MenuList items={this.state.order} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-right">
          <OrderTotal items={this.state.order} />
        </div>
      </div>
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
