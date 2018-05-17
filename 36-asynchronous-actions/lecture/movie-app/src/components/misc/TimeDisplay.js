import React from 'react';

class TimeDisplay extends React.Component {
  zeroPad(minutes) {
    let result = minutes;
    if (minutes < 10) {
      result = '0' + result;
    }
    return result;
  }

  render() {
    return <span>
      {this.prop0.hour}:{this.zeroPad(this.props.minutes)}
    </span>
  }
}

export default TimeDisplay;