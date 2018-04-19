import React from 'react';

class UserInputMirrorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(ev) {
    let input = ev.target.value;
    this.setState({userInput: input});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log('SearchForm input:', this.state.userInput);

    this.props.search(this.state.userInput);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text"
        onChange={this.updateInput}
        value={this.state.userInput} placeholder="search for a movie" />
      <button>search</button>
    </form>
  }
}

module.exports = UserInputMirrorer;