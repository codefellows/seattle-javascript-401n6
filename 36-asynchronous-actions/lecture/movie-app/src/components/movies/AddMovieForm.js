import React from 'react';
import {connect} from 'react-redux';
import {createMovie} from '../../actions/movie-actions';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.createMovie = this.createMovie.bind(this);
  }

  createMovie(ev) {
    ev.preventDefault();
    let hour = ev.target.getElementsByTagName('input')[0].value;
    let minute = ev.target.getElementsByTagName('input')[1].value;
    let name = ev.target.getElementsByTagName('input')[2].value;
    let theaterId = this.props.theaterId;
    // choice 1: three params (hour, minute, name)
    // choice 2: one object {hour, minute, name}
    
    // remember to parse the input strings to real numbers
    hour = parseInt(hour, 10);
    minute = parseInt(minute, 10);

    let movieParams = {hour, minute, name, theaterId};
    console.log('movieParams', movieParams);
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