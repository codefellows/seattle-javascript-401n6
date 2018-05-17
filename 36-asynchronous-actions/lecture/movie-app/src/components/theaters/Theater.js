import React from 'react';
import {connect} from 'react-redux';
import AddMovieForm from '../movies/AddMovieForm';
import MovieList from '../movies/MovieList';
import TheaterForm from './TheaterForm';
import TimeDisplay from '../misc/TimeDisplay';
import thatsAllFolks from './thats-all-folks.jpg';

class Theater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
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

  startEditing = () => {
    this.setState({isEditing: true});
  }

  finishEditing = () => {
    this.setState({isEditing: false});
  }

  noMovies() {
    return <React.Fragment>
      <p>That's all folks! Sorry, no movies showing now.</p>
      <img style={{maxWidth: "200px"}} src={thatsAllFolks} />
    </React.Fragment>
  }

  earliestMovie(moviesAtThisLocation) {
    const earliestMovie = this.determineEarliestMovie(moviesAtThisLocation);
    const {startHour, startMinute} = earliestMovie;
    return <React.Fragment>
      Opens at <TimeDisplay hour={startHour} minutes={startMinute} />
    </React.Fragment>
  }

  render() {
    const moviesAtThisLocation = this.moviesAtThisLocation(this.props.movies);
    let isClosed = moviesAtThisLocation.length === 0;

    return <div className="theater-schedule">
      <h1>
        {this.props.theater.name}
        <button onClick={this.startEditing}>edit</button>
      </h1>
      {this.state.isEditing && <TheaterForm mode="update" theater={this.props.theater}
        onComplete={this.finishEditing}/>}
      {!isClosed && this.earliestMovie(moviesAtThisLocation)}
      <AddMovieForm theaterId={this.props.theater.id} />
      {isClosed && this.noMovies()}
      {!isClosed && <MovieList movies={moviesAtThisLocation} />}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(Theater);