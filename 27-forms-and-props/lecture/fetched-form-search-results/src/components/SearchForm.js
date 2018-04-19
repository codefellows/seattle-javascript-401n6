import React from 'react';

class UserInputMirrorer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <form>
      {this.props.title}:
      <input type="text" placeholder="search for a movie" />
      <button>search</button>
    </form>
  }
}

module.exports = UserInputMirrorer;