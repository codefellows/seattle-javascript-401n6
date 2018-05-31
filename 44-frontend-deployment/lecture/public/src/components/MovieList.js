import React, {Component, Fragment} from 'react';
import MOVIES from '../movie_titles';

export default class HomePage extends Component {
  render() {
    return <Fragment>
      <h1>Movies</h1>
      <p>{MOVIES.length} movies.</p>
      {MOVIES.map(movie => {
        return <div key={movie.id}>
          ({movie.year}) {movie.title}
        </div>
      })}
    </Fragment>
  }
}