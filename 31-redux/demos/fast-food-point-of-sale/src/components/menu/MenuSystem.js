import React from 'react';

import MenuList from './MenuList';
import OrderTotal from './OrderTotal';

class MenuSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [
        this.props.menuData.items[0],
        this.props.menuData.items[1],
        this.props.menuData.items[0]
      ]
    };
  }

  render() {
    return <div className="menu container-fluid">
      <div className="row">
        <div className="col-xs-6">
          <h1>
            <img className="logo" src={this.props.menuData.logo} />
            {this.props.menuData.name}
          </h1>
          <MenuList items={this.props.menuData.items} />
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

export default MenuSystem;
