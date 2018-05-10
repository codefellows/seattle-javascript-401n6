import {combineReducers} from 'redux';

import redditReducer from './reddit-reducer';
import counterReducer from './counter-app';
import timestampReducer from './timestamps';

export default combineReducers({
  reddit: redditReducer,
  counter: counterReducer,
  timestamps: timestampReducer
});