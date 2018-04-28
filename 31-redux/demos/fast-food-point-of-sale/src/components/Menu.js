import React from 'react';
import MenuItem from './MenuItem';

const Menu = (props) => {
  if (props.menuitems.length === 0) {
    return <p>No menu items available.</p>
  }
  return props.menuitems.map(item => {
    <MenuItem item={item} />
  })
}

export default Menu;
