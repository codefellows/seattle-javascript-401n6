import React from 'react';
import {connect} from 'react-redux';
import MovieShowtime from './MovieShowtime';

class MovieList extends React.Component {
    render() {
    return <ul>
      {this.props.movies.map((movie, i) => {
        return <MovieShowtime key={i} movie={movie}/>
      })}
    </ul>
  }
}

export default MovieList;