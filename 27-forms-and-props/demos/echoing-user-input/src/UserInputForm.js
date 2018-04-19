import React from 'react';

class UserInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({userInput: ev.target.value});
  }

  render() {
    return <div>
      <form>
        <input type="text"
          onChange={this.onChange}
          value={this.state.userInput}
          placeholder="enter text here">
        </input>
      </form>
      <div>mirrored user input: {this.state.userInput}</div>
    </div>
  }
}

module.exports = UserInputForm;
