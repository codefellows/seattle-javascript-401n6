import React from 'react';
import {connect} from 'react-redux';
import Theater from './Theater';

class TheaterList extends React.Component {
  render() {
    return this.props.theaters.map((theater, i) => {
      return <Theater key={i} theater={theater} />
    });
  }
}

function mapStateToProps(state) {
  return {
    theaters: state.theaters
  }
}

export default connect(mapStateToProps)(TheaterList);