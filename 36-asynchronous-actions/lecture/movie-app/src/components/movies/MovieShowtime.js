import React from 'react';
import {connect} from 'react-redux';
import TimeDisplay from '../misc/TimeDisplay';
import {deleteMovie} from '../../actions/movie-actions';

class MovieShowtime extends React.Component {
  deleteMovie = () => {
    this.props.deleteMovie(this.props.movie);
  }

  render() {
    return <li>
      <button>edit</button>
      <button onClick={this.deleteMovie}>
        delete
      </button>
      {' '}
      <TimeDisplay hour={this.props.movie.startHour}
                   minutes={this.props.movie.startMinute} />
      {' '}{this.props.movie.title}
    </li>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteMovie: (movie) => dispatch(deleteMovie(movie))
  }
}

export default connect(null, mapDispatchToProps)(MovieShowtime);