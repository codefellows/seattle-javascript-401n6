import {combineReducers} from 'redux';

import emailReducer from './email';
import counterReducer from './counter-app';
import timestampReducer from './timestamps';

export default combineReducers({
  email: emailReducer,
  counter: counterReducer,
  timestamps: timestampReducer
});