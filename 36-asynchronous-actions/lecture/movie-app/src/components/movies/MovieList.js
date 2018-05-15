import React from 'react';
import MovieShowtime from './MovieShowtime';

class MovieList extends React.Component {
  render() {
    return <ul>
      <MovieShowtime />
    </ul>
  }
}

export default MovieList;