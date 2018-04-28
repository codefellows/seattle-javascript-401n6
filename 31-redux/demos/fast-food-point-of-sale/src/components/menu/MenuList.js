import React from 'react';
import MenuItem from './MenuItem';
import './menu.scss';

export default (props) => {
  if (props.items.length === 0) {
    return <p>No items.</p>
  }
  return props.items.map((item, i) => {
    return <MenuItem item={item} key={i}
                     actionName={props.actionName}
                     action={props.action} />
  })
}
