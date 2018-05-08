import {combineReducers} from 'redux';

import counterReducer from './counter-app';
import timestampReducer from './timestamps';

export default combineReducers({
  counter: counterReducer,
  timestamps: timestampReducer
});