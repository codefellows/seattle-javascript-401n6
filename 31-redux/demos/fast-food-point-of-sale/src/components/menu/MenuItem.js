import React from 'react';
import MenuPrice from './MenuPrice';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="menu-item">
      <button>add</button>
      <p className="price">
        <MenuPrice price={this.props.item.price} />
      </p>
      <p className="item">{this.props.item.item}</p>
    </div>
  }
}

export default MenuItem;
