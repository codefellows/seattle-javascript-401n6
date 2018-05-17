export const THEATER_CREATE = 'THEATER_CREATE';
export const THEATER_UPDATE = 'THEATER_UPDATE';
export const THEATER_DELETE = 'THEATER_DELETE';

export const createTheater = (name) => {
  return {type: THEATER_CREATE, name};
}

export const updateTheater = () => {
  return {type: THEATER_UPDATE};
}

export const deleteTheater = () => {
  return {type: THEATER_DELETE};
}