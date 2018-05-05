import {STAMP} from '../actions/timestamp-actions';

const initialState = {
  timestamps: []
};

export default function counterReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  switch(action.type) {
    case STAMP:
      return Object.assign(newState, state, {
        timestamps: [...state.timestamps, new Date()]
      });
    default: return state;
  }
}
