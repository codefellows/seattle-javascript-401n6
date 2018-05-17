import React from 'react';
import {connect} from 'react-redux';
import AddMovieForm from '../movies/AddMovieForm';
import MovieList from '../movies/MovieList';
import TheaterForm from './TheaterForm';

class Theater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
    this.startEditing = this.startEditing.bind(this);
  }

  moviesAtThisLocation(movies) {
    return this.props.movies.filter(mov => {
      // remember if this movie is playing at this theater to return later.
      let isAtThisTheater = mov.theaterId === this.props.theater.id;
      return isAtThisTheater;
    });
  }

  determineEarliestMovie(movies) {
    // sample the datat to get the first movie to prevent zero-comparison errors
    // convert hours to second-hours and add seconds for consistent comparison.
    let openingMovie = movies[0];
    let openingTime = openingMovie.startHour * 60 + openingMovie.startMinute;

    movies.forEach(mov => {
      // figure out if this is the earliest-playing movie.
      let startTime = mov.startHour * 60 + mov.startMinute;
      if (startTime < openingTime) {
        openingMovie = mov;
        openingTime = startTime;
      }
    });
    return openingMovie;
  }

  startEditing() {
    this.setState({isEditing: true});
  }

  render() {
    const moviesAtThisLocation = this.moviesAtThisLocation(this.props.movies);
    const earliestMovie = this.determineEarliestMovie(moviesAtThisLocation);
    const {startHour, startMinute} = earliestMovie;
    console.log(earliestMovie, startHour, startMinute);
    return <div className="theater-schedule">
      <h1>
        {this.props.theater.name}
        <button onClick={this.startEditing}>edit</button>
      </h1>
      {this.state.isEditing && <TheaterForm mode="update" theater={this.props.theater} />}
      <p>
        Opens at {startHour}:{startMinute}
      </p>
      <AddMovieForm theaterId={this.props.theater.id} />
      <MovieList movies={moviesAtThisLocation} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(Theater);