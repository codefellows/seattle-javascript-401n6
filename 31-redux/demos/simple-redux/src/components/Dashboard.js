import React from 'react'
import {connect} from 'react-redux';
import {
  increment,
  decrement,
  incrementBy,
  decrementBy,
} from '../actions/counter-actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incBy: 2,
      decBy: 2
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    console.log(ev.target.value);
    let newState = {
      [ev.target.name]: parseInt(ev.target.value, 10)
    };
    this.setState(newState);
  }

  render() {
    return <div>
      <h1>{this.props.appName}</h1>
      <div>
        Data: {this.props.data}
      </div>
      <div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
      </div>
      <div>
        <button onClick={() => this.props.incrementBy(this.state.incBy)}>
          increment by
        </button>
        <input onChange={this.handleChange}
               name="incBy" type="number"
               value={this.state.incBy} />
      </div>
      <div>
        <button onClick={() => this.props.decrementBy(this.state.decBy)}>
          decrement by
        </button>
        <input onChange={this.handleChange}
               name="decBy" type="number"
               value={this.state.decBy} />
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  data: state.data,
  appName: state.appName,
});

// TODO: find out what's up getState here.
const mapDispatchToProps = (dispatch, getState) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementBy: (val) => dispatch(incrementBy(val)),
    decrementBy: (val) => dispatch(decrementBy(val)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

