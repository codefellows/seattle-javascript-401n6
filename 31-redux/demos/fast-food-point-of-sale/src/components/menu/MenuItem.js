import React from 'react';
import PriceIndividual from './PriceIndividual';

class MenuItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.action = this.action.bind(this);
  }

  action() {
    this.props.action(this.props.item);
  }

  render() {
    return <div className="menu-item">
      <button onClick={this.action}>{this.props.actionName}</button>
      <p className="price">
        <PriceIndividual price={this.props.item.price} />
      </p>
      <p className="item">{this.props.item.item}</p>
    </div>
  }
}

export default MenuItem;
