import React from 'react';
import AddMovieForm from '../movies/AddMovieForm';
import MovieList from '../movies/MovieList';

class Theater extends React.Component {
  render() {
      return <div className="theater-schedule">
        <h1>AMC</h1>
        <h2>Opens at: 7:30</h2>
        <AddMovieForm />
        <MovieList />
      </div>
  }
}

export default Theater;