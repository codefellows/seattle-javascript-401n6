import React, {Component, Fragment} from 'react';
import MOVIES from '../movie_titles';

export default class HomePage extends Component {
  state = {
    isLoading: true,
    movies: [],
    index: 0,
    total: undefined,
  }

  componentDidMount = () => {
    console.log('mounted')
    this.getMovieData();
  }

  getMovieData = () => {
    this.setState({isLoading: true});
    console.log('fetching')

    fetch('/api/movies?skip=' + this.state.index)
    .then(res => res.json())
    .then(json => {
      console.log('results:', json)
      this.setState({
        movies: json.movies,
        total: json.total,
        isLoading: false,
      })
    })
  }

  next = () => {
    this.setState({index: this.state.index + 10}, this.getMovieData)
  }

  render() {
    return <Fragment>
      <h1>Movies</h1>
      <p>
        {this.state.index}-{this.state.index + 10} of {this.state.total} movies.
      </p>
      <p>
        <button onClick={this.prev}>prev</button>
        <button onClick={this.next}>next</button>
      </p>
      {this.isLoading && <p>loading...</p>}
      {!this.isLoading && this.state.movies.map(movie => {
        return <div key={movie.id}>
          ({movie.year}) {movie.title}
        </div>
      })}
    </Fragment>
  }
}