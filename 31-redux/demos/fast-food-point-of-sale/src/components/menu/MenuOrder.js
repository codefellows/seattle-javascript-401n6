import React from 'react';

class MenuOrder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="menu-item">
      <button>add</button>
      <p className="price">{this.renderPrice()}</p>
      <p className="item">{this.props.item.item}</p>
    </div>
  }
}

export default MenuOrder;
