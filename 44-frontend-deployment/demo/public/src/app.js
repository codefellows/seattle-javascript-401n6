import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import MOVIES from '../movies';

class App extends Component {
  state = {
    loading: true,
    movies: [],
    total: 0,
    title: undefined,
    minyear: null, maxYear: null,
    index: 0,
  }

  componentDidMount() {
    this.getMovies();
  }

  filter = (ev) => {
    ev.preventDefault();

    // qTitle will be an empty string at the very least
    let qTitle = document.getElementById('title').value;
    let qMinYear = parseInt(document.getElementById('minyear').value);
    let qMaxYear = parseInt(document.getElementById('maxyear').value);

    /// if there's no search terms provided then reinflate the whole list.
    if (!qTitle && !qMaxYear && !qMinYear) {
      this.setState({movies: MOVIES});
      return;
    }

    let movies = MOVIES.filter(movie => {
      let year = movie[1];
      let title = movie[2];

      let titleMatches = !qTitle || title.includes(qTitle);
      let minYearMatches = isNaN(qMinYear) || year >= qMinYear;
      let maxYearMatches = isNaN(qMaxYear) || year <= qMaxYear;
      return titleMatches && minYearMatches && maxYearMatches;
    });

    this.setState({movies});
  }

  sortByYear = () => {
    let movies = this.state.movies.slice();
    movies.sort((m1, m2) => {
      if (m2.title < m1.title) {
        return -1;
      } else if (m2.title > m1.title) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({movies})
  }

  sortByTitle = () => {
    let movies = this.state.movies.slice();
    movies.sort((m1, m2) => {
      if (m2.title < m1.title) {
        return 1;
      } else if (m2.title > m1.title) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({movies})
  }

  getMovies = () => {
    this.setState({loading: true});
    fetch('/movies?skip=' + this.state.index)
    .then(res => res.json())
    .then(json => {
      this.setState({
        loading: false,
        movies: json.movies,
        total: json.total,
      });
    });
  }

  getPrev = () => {
    let index = Math.max(0, this.state.index - 10);
    this.setState({index}, () => {
      this.getMovies();
      this.updateUrl();
    });
  }

  getNext = () => {
    let index = this.state.index + 10;
    this.setState({index}, () => {
      this.getMovies();
      this.updateUrl();
    });
  }

  updateUrl = () => {
    let url = "/?index=" + this.state.index;
    if (this.state.index == 0) {
      url = "/";
    }
    history.pushState({index: 10}, "Search Results", url);
  }

  render() {
    return <Fragment>
      <h1>My App!!</h1>
      <p>
        {this.state.index}-{this.state.index + 10} of {this.state.total} results.
      </p>
      <form onSubmit={this.filter}>
        <input id="title" type="text" placeholder="movie name"/>
        <input id="minyear" type="number" placeholder="start year"/>
        <input id="maxyear" type="number" placeholder="end year" />
        <button type="submit">filter</button>
      </form>
      <p>
        <button onClick={this.sortByYear}>sort by year</button>
        <button onClick={this.sortByTitle}>sort by title</button>
      </p>

      {this.state.loading && <p>Loading...</p>}

      {!this.state.loading && this.state.movies.map((movie, i) => {
        return <div key={movie._id}>{movie.year} {' '} {movie.title}</div>
      })}

      <p>
        <button onClick={this.getPrev}>previous</button>
        <button onClick={this.getNext}>next</button>
      </p>
    </Fragment>
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);