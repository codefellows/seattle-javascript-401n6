import {
  MOVIE_CREATE,
  MOVIE_UPDATE,
  MOVIE_DELETE
} from '../actions/movie-actions';

class Movie {
  constructor(title, startHour, startMinute, theaterId) {
    this.title = title;
    this.startHour = startHour;
    this.startMinute = startMinute;
    this.theaterId = theaterId;
  }
}

const initialState = [
  new Movie("The Hobbit", 9, 30, 65),
  new Movie("Batman", 5, 0, 65),
  new Movie("Fiddler on the Roof", 7, 30, 65),
  new Movie("Star Trek", 8, 20, 31),
  new Movie("Doom", 4, 45, 31),
];

export default (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  console.log('inside movie reducer');
  switch (action.type) {
    case MOVIE_CREATE:
      let {name, hour, minute, theaterId} = action.movie;
      let newMovie = new Movie(name, hour, minute, theaterId);
      console.log('creating movie', newMovie);
      return [...state, newMovie];
    case MOVIE_UPDATE:
    case MOVIE_DELETE:
    default:
      return state;
  }
};