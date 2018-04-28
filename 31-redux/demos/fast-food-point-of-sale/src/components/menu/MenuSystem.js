import React from 'react';

import MenuList from './MenuList';
import PriceTotal from './PriceTotal';

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

    this.addToOrder = this.addToOrder.bind(this);
  }

  addToOrder(item) {
    // let order = this.state.order.slice();
    // order.push(item);
    // this.setState({order});

    this.state.order.push(item);
    this.setState({order: this.state.order});
  }

  reset() {
    this.setState({order: []});
  }

  finish() {
    let total = 0;
    this.setState({total: total});
  }

  render() {
    return <div className="menu container-fluid">
      <div className="row">
        <div className="col-xs-6">
          <h1>
            <img className="logo" src={this.props.menuData.logo} />
            {this.props.menuData.name}
          </h1>
          <MenuList items={this.props.menuData.items} 
                    addToOrder={this.addToOrder} />
        </div>
        <div className="col-xs-6">
          <h1>Current Order</h1>
          <MenuList items={this.state.order} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 text-right">
          <h1>
            Total: <PriceTotal items={this.state.order} />
            <button onClick={this.reset}>reset</button>
            <button onClick={this.finish}>finish</button>
          </h1>
        </div>
      </div>
    </div>
  }
}

export default MenuSystem;
