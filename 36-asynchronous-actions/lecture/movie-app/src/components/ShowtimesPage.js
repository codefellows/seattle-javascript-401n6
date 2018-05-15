import React from 'react';
import AddTheaterForm from './theaters/AddTheaterForm';
import TheaterList from './theaters/TheaterList';

class MoviePage extends React.Component {
  render() {
    return <React.Fragment>
      <AddTheaterForm />
      <TheaterList />
    </React.Fragment>
  }
}

export default MoviePage;