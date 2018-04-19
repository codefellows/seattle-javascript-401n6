import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  getList() {
    if (this.props.results === 0) {
      return <p>No phrases.</p>
    } else if (this.props.results === 1) {
      return <p>One phrase.</p>
    } else {
      return <p>Many phrases!</p>
    }
  }

  render() {
    return <div>
      <p>Search results:</p>
      {this.getList()}
    </div>
  }
}

module.exports = SearchResults;
