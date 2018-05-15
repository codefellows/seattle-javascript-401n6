import React from 'react';

class MovieShowtime extends React.Component {
  render() {
    return <li>
      ({this.props.movie.startHour}:{this.props.movie.startMinute})
      {this.props.movie.title}
    </li>
  }
}

export default MovieShowtime;