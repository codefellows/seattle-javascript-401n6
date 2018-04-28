import React from 'react';
import PriceIndividual from './PriceIndividual';

class MenuItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addToOrder = this.addToOrder.bind(this);
  }

  addToOrder() {
    this.props.addToOrder(this.props.item);
  }

  render() {
    return <div className="menu-item">
      <button onClick={this.addToOrder}>add</button>
      <p className="price">
        <PriceIndividual price={this.props.item.price} />
      </p>
      <p className="item">{this.props.item.item}</p>
    </div>
  }
}

export default MenuItem;
