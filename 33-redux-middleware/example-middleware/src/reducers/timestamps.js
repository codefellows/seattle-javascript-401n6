import {
  ADD_TIMESTAMP
} from '../actions/timestamp-actions';

const initialState = {
  timestamps: [Date.now()]
};

export default function counterReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }
  switch(action.type) {
    case ADD_TIMESTAMP:
      let newState = {
        ...state,
        timestamps: [...state.timestamps, Date.now()]
      };
      return newState;
    default: return state;
  }
}
