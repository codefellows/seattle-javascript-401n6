import React from 'react';
import PriceIndividual from './PriceIndividual';

class PriceTotal extends React.PureComponent {
  total() {
    return this.props.items.reduce((total, item) => {
      console.log(total, item);
      return total + item.price;
    }, 0);
  }

  render() {
    return <PriceIndividual price={this.total()} />
  }
}

export default PriceTotal;
