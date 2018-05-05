import React from 'react'
import {connect} from 'react-redux';
import {stamp} from '../actions/timestamp-actions';

class TimestampList extends React.Component {
  render() {
    return <div>
      <h1>Timestamps</h1>
      <button onClick={this.props.addTimestamp}>
        add timestamp
      </button>
      <ol>
        {this.props.timestamps.map((timestamp, i) => {
          return <li key={i}>{timestamp.toString()}</li>
        })}
      </ol>
    </div>
  }
}

const mapStateToProps = state => {
  return {timestamps: state.timestamps.timestamps};
}

// TODO: find out what's up getState here.
const mapDispatchToProps = (dispatch, getState) => {
  return {
    addTimestamp: () => dispatch(stamp()),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(TimestampList);

