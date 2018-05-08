import React from 'react'

export default class TimestampList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamps: [
        Date.now(),
        Date.now(),
        Date.now(),
      ]
    }
    this.addTimestamp = this.addTimestamp.bind(this);
  }

  addTimestamp() {
    let state = {timestamps: [...this.state.timestamps, Date.now()]}
    this.setState(state);
  }

  render() {
    return <React.Fragment>
      <h1>Timestamps</h1>
      <div>
        <button onClick={this.addTimestamp}>add timestamp</button>
      </div>
      {this.state.timestamps.map(timestamp => {
        return <div>{timestamp.toString()}</div>
      })}
    </React.Fragment>
  }
}
