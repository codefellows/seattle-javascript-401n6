import React from 'react';
import MenuItem from './MenuItem';
import './menu.scss';

import connect from 'react-redux';

const mapStateToProps = state => {
  return {
    items: state.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: (item) => {
      dispatch();
    }
  }
};

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
