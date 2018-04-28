import React from 'react';
import './two-pane.scss';

class TwoPane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="two-pane">
      <div className="left">{this.props.left}</div>
      <div className="right">{this.props.right}</div>
    </div>
  }
}

export default TwoPane;
