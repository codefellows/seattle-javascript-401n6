import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY,
  DECREMENT_BY
} from '../actions/counter-actions';

const initialState = {
  appName: 'Counting',
  data: 0,
};

export default function counterReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }
  let newState = {};
  switch(action.type) {
    case INCREMENT:
      return Object.assign(newState, state, {data: state.data + 1});
    case DECREMENT:
      return Object.assign(newState, state, {data: state.data - 1});
    case INCREMENT_BY:
      return Object.assign(newState, state, {data: state.data + action.value});
    case DECREMENT_BY:
      return Object.assign(newState, state, {data: state.data - action.value});
    default: return state;
  }
}
