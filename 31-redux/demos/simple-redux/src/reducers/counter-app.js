import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY,
  DECREMENT_BY
} from '../actions/counter-actions';

const initialState = {data: 0};

export default function counterReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case INCREMENT: return {data: state.data + 1}
    case DECREMENT: return {data: state.data - 1}
    case INCREMENT_BY: return {data: state.data + action.value}
    case DECREMENT_BY: return {data: state.data - action.value}
    default: return state;
  }
}
