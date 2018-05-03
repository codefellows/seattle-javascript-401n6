import React from 'react';

import MenuList from './MenuList';
import PriceIndividual from './PriceIndividual';

class MenuSystem extends React.Component {
  constructor(props) {
    super(props);

    let randomItems = 5;
    let items = [];
    for (var i = 0; i < randomItems; i++) {
      let index = Math.floor(Math.random() * this.props.menuData.items.length);
      let item = this.props.menuData.items[index];
      items.push(item);
    }

    this.state = {
      totalOrders: 0,
      todaysTotal: 0,
      order: items
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.addToOrder.bind(this);
    this.reset = this.reset.bind(this);
    this.finish = this.finish.bind(this);
    this.total = this.total.bind(this);
  }

  addToOrder(item) {
    let order = this.state.order.slice();
    order.push(item);
    this.setState({order});
  }

  removeFromOrder(item) {
    let order = this.state.order.slice();
    let index = order.indexOf(item);
    order.splice(index, 1);
    this.setState({order});
  }

  reset() {
    this.setState({order: []});
  }

  finish() {
    this.setState({
      totalOrders: this.state.totalOrders + 1,
      todaysTotal: this.state.todaysTotal + this.total(),
      order: []
    });
  }

  total() {
    return this.state.order.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }

  render() {
    return <div className="container-fluid">
      <div className="menu row">
        <div className="col-xs-12">
          <h1>
            <img className="logo" src={this.props.menuData.logo} />
            {this.props.menuData.name}
          </h1>
        </div>
      </div>

      <div className="menu row">
        <div className="col-xs-6">
          <h1>Menu Items</h1>
          <MenuList items={this.props.menuData.items} 
                    action={this.addToOrder} 
                    actionName="add" />
        </div>
        <div className="col-xs-6">
          <div className="order-actions row">
            <div className="col-xs-6">
              <h1><button onClick={this.reset}>reset</button></h1>
            </div>
            <div className="col-xs-6">
              <h1><button onClick={this.finish}>finish</button></h1>
            </div>
          </div>
          <h1>
            <span>Current Order: </span>
            <PriceIndividual price={this.total()} />
          </h1>
          <MenuList items={this.state.order} 
                    action={this.removeFromOrder} 
                    actionName="remove" />
        </div>
      </div>

      <div className="menu row">
        <div className="col-xs-12">
          <p>
            Orders placed: {this.state.totalOrders}
          </p>
          <p>
            Today's Total: <PriceIndividual price={this.state.todaysTotal} />
          </p>
        </div>
      </div>
    </div>
  }
}

export default MenuSystem;
