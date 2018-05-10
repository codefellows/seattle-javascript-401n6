import React from 'react'
import {connect} from 'react-redux';
import {
  addTimestamp
} from '../actions/timestamp-actions';

class TimestampList extends React.Component {
  render() {
    return <React.Fragment>
      <h1>Timestamps</h1>
      <div>
        <button onClick={this.props.addTimestamp}>add timestamp</button>
      </div>
      {this.props.timestamps.map((timestamp, i) => {
        return <div key={i}>{timestamp.toString()}</div>
      })}
    </React.Fragment>
  }
}

const mapStateToProps = (state) => {
  return {
    timestamps: state.timestamps.timestamps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTimestamp: () => dispatch(addTimestamp())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimestampList);