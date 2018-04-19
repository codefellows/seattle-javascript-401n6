import React from 'react';
import faker from 'faker';

class ListRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(ev) {
    let count = ev.target.value;
    count = parseInt(count, 10);
    this.setState({count});
  }

  onSubmit(ev) {

  }

  getList() {
    if (this.state.count === 0) {
      return <p>No phrases.</p>
    } else if (this.state.count === 1) {
      return <p>One phrase.</p>
    } else {
      return <p>Many phrases!</p>
    }
  }

  phrases() {
    let phrases = ["cowabunga", "any array"];
    phrases = phrases.map(phrase => {
      return <li>{phrase}</li>
    });
    return <ol>
      {phrases}
    </ol>
  }

  render() {
    return <div>
      {this.phrases()}
    </div>
  }
}

module.exports = ListRenderer;
