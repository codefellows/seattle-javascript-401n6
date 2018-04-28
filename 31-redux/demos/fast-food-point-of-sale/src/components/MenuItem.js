import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p>{this.props.item.item}</p>
      <p>{this.props.item.price}</p>
      <button>add</button>
    </div>
  }
}

export default MenuItem;
