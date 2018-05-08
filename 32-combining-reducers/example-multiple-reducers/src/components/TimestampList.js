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
  }

  render() {
    return <React.Fragment>
      <h1>Timestamps</h1>
      <div>{this.state.timestamps.length}</div>
      {this.state.timestamps.map(timestamp => {
        return <div>{timestamp.toString()}</div>
      })}
    </React.Fragment>
  }
}
