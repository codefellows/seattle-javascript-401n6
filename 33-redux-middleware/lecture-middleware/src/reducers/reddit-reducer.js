import {
  SET_IMAGES
} from '../actions/reddit-actions';

const initialState = {
  isSearching: false,
  isLoading: false,
  images: []
};

export default function redditReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case SET_IMAGES:
      let newState = {
        ...state,
        images: action.images
      };
      return newState;
    default: return state;
  }
}
