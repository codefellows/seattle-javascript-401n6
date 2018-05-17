import React from 'react';
import {connect} from 'react-redux';
import {createMovie} from '../../actions/movie-actions';

class AddMovieForm extends React.Component {
  // using stage-2 babel with arrow functions in class methods
  // now we don't have to use bind()!!
  createMovie = (ev) => {
    ev.preventDefault();
    let hour = ev.target.getElementsByTagName('input')[0].value;
    let minute = ev.target.getElementsByTagName('input')[1].value;
    let name = ev.target.getElementsByTagName('input')[2].value;
    let theaterId = this.props.theaterId;
    // remember to parse the input strings to real numbers
    hour = parseInt(hour, 10);
    minute = parseInt(minute, 10);

    // choice 1: three params (hour, minute, name)
    // choice 2: one object {hour, minute, name}
    let movieParams = {hour, minute, name, theaterId};
    this.props.createMovie(movieParams);
  }

  render() {
    return <form className="add-movie-form" onSubmit={this.createMovie}>
      <input name="showtime-hour" type="text" placeholder="7" />
      <span>:</span>
      <input name="showtime-minute" type="text" placeholder="30" />
      <input name="movie" type="text" placeholder="The Hobbit" />
      <input type="submit" placeholder="add movie" />
    </form>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createMovie: (movie) => dispatch(createMovie(movie))
  }
}

export default connect(null, mapDispatchToProps)(AddMovieForm);