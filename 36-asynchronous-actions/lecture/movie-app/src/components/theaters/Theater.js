import React from 'react';
import {connect} from 'react-redux';
import AddMovieForm from '../movies/AddMovieForm';
import MovieList from '../movies/MovieList';

class Theater extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.theaterMovies();
  }

  theaterMovies() {
    // sample the datat to get the first movie to prevent zero-comparison errors
    // convert hours to second-hours and add seconds for consistent comparison.
    let openingMovie = this.props.movies[0];
    let openingTime = openingMovie.startHour * 60 + openingMovie.startMinute;

    let movies = this.props.movies.filter(mov => {
      // remember if this movie is playing at this theater to return later.
      let isAtThisTheater = mov.theaterId === this.props.theater.id;
      if (isAtThisTheater) {
        // figure out if this is the earliest-playing movie.
        let startTime = mov.startHour * 60 + mov.startMinute;
        if (startTime < openingTime) {
          openingMovie = mov;
          openingTime = startTime;
        }
      }
      return isAtThisTheater;
    });

    return {openingMovie, movies};
  }

  render() {
    const {startHour, startMinute} = this.state.openingMovie;
    return <div className="theater-schedule">
      <h1>{this.props.theater.name}</h1>
      <h2>
        Opens at {' '}
        {this.state.openingMovie && `${startHour}:${startMinute}`}
      </h2>
      <AddMovieForm />
      <MovieList movies={this.state.movies}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(Theater);