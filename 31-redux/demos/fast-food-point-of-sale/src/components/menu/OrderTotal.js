import React from 'react';
import MenuPrice from './MenuPrice';

class OrderTotal extends React.Component {
  constructor(props) {
    super(props);
  }

  total() {
    return this.props.items.reduce((total, item) => {
      console.log(total, item);
      return total + item.price;
    }, 0);
  }

  render() {
    return <div>
      <h1>
        Total: <MenuPrice price={this.total()} />
      </h1>
    </div>
  }
}

export default OrderTotal;
