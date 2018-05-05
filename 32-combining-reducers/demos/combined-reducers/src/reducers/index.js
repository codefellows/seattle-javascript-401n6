import {combineReducers} from 'redux';
import counterAppReducer from './counter-app';
import timestampReducer from './timestamp';

export default combineReducers({
  counter: counterAppReducer,
  timestamps: timestampReducer
})