import React from 'react';
import TimeDisplay from '../misc/TimeDisplay';

class MovieShowtime extends React.Component {
  render() {
    return <li>
      <TimeDisplay hour={this.props.movie.startHour}
                   minutes={this.props.movie.startMinute} />
      {' '}{this.props.movie.title}
    </li>
  }
}

export default MovieShowtime;