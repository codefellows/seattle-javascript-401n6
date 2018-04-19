import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul>
      <li>Movie 1</li>
      <li>Movie 2</li>
      <li>Movie 3</li>
    </ul>
  }
}

module.exports = SearchResults;