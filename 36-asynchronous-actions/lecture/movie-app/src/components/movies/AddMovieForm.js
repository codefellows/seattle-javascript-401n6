import React from 'react';

class AddMovieForm extends React.Component {
  render() {
    return <form className="add-movie-form">
      <input name="showtime-hour" type="text" placeholder="7" />
      <span>:</span>
      <input name="showtime-minute" type="text" placeholder="30" />
      <input name="movie" type="text" placeholder="The Hobbit" />
      <input type="submit" placeholder="add movie" />
    </form>
  }
}

export default AddMovieForm;