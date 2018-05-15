import {combineReducers} from 'redux';

import movieReducer from './movie-reducer';
import theaterReducer from './theater-reducer';

export default combineReducers({
  movies: movieReducer,
  theaters: theaterReducer
});