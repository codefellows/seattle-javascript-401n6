import React from 'react';
import MenuItem from './MenuItem';
import './menu.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  items() {
    if (this.props.menu.items.length === 0) {
      return <p>No menu items available.</p>
    }
    return this.props.menu.items.map((item, i) => {
      return <MenuItem item={item} key={i}/>
    })
  }

  render() {
    return <React.Fragment>
      <h1>{this.props.menu.name}, can I take your order?</h1>
      {this.items()}
    </React.Fragment>
  }
}

export default Menu;
