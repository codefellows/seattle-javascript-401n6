import React from 'react';
import TheaterForm from './theaters/TheaterForm';
import TheaterList from './theaters/TheaterList';

class MoviePage extends React.Component {
  render() {
    return <React.Fragment>
        <h1>Movie Showtimes</h1>
        <TheaterForm mode="create" />
        <TheaterList />
    </React.Fragment>
  }
}

export default MoviePage;