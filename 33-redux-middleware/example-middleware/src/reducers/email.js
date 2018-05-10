import {
  START_SENDING_EMAIL,
  CANCEL_SENDING_EMAIL,
  SEND_EMAIL,
} from '../actions/email-actions';

const initialState = {
  isSending: false,
};

export default function counterReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }
  let newState;
  switch(action.type) {
    case START_SENDING_EMAIL:
      newState = {
        ...state,
        isSending: true,
        meta: {delay: 3000}
      };
      return newState;
    case CANCEL_SENDING_EMAIL:
      newState = {...state, isSending: false};
      return newState;
    case SEND_EMAIL:
      newState = {...state, isSending: false};
      return newState;
    default: return state;
  }
}
