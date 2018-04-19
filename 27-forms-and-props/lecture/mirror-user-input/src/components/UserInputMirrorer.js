import React from 'react';

class UserInputMirrorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: 'type something here'
    }
    this.onChange = this.onChange.bind(this);
    this.display = this.display.bind(this);
  }

  onChange(ev) {
    let input = ev.target.value;
    console.log('input', input);
    this.setState({userInput: input});
  }

  display() {
    this.props.appFunc(this.state.userInput);
  }

  render() {
    return <div>
      {this.props.title}:
      <input type="text" placeholder="enter text here"
        value={this.state.userInput}
        onChange={this.onChange} />
      Mirror: {this.state.userInput}
      <button onClick={this.display}>display</button>
    </div>
  }
}

module.exports = UserInputMirrorer;