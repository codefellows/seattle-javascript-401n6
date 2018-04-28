import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // helper function that converts a penny-price value
  // like the number 209 into displaying as "$2.09"
  renderPrice() {
    let price = this.props.item.price;
    let pennies = price % 100;
    let dollars = Math.floor(price / 100);
    if (pennies < 10) {
      pennies = '0' + pennies;
    }
    return `\$${dollars}.${pennies}`;
  }

  render() {
    return <div className="menu-item">
      <button>add</button>
      <p className="price">{this.renderPrice()}</p>
      <p className="item">{this.props.item.item}</p>
    </div>
  }
}

export default MenuItem;
