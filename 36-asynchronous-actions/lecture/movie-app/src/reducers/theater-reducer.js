import {
  THEATER_CREATE,
  THEATER_UPDATE,
  THEATER_DELETE
} from '../actions/theater-actions';

class Theater {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

const initialState = [
  new Theater("Regal", 65),
  new Theater("AMC", 31)
];

export default (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action) {
    case THEATER_CREATE:
      return [...state, newTheater];
    case THEATER_UPDATE:
    case THEATER_DELETE:
    default:
      return state;
  }
};