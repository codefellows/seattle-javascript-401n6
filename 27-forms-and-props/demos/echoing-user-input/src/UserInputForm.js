import React from 'react';

class UserInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
  }

  render() {
    return <div>
      <form>
        <input type="text" value={this.state.userInput}
          placeholder="enter text here">
        </input>
      </form>
      <div>mirrored user input: {this.state.userInput}</div>
    </div>
  }
}

module.exports = UserInputForm;
