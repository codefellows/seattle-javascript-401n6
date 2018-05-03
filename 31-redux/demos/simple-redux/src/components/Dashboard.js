import React from 'react'
import {connect} from 'react-redux';
import {increment, decrement} from '../actions/counter-actions';

class Dashboard extends React.Component {
  render() {
    return <div>
      Data: {this.props.data}
      <button onClick={this.props.increment}>increment</button>
      <button onClick={this.props.decrement}>decrement</button>
    </div>
  }
}

const mapStateToProps = state => ({
  data: state.data,
})

const mapDispatchToProps = (dispatch, getState) => ({
  increment: category => dispatch(increment()),
  decrement: category => dispatch(decrement()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

