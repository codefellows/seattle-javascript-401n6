export const MOVIE_CREATE = 'MOVIE_CREATE';
export const MOVIE_UPDATE = 'MOVIE_UPDATE';
export const MOVIE_DELETE = 'MOVIE_DELETE';

export const createMovie = () => {
  return {type: MOVIE_CREATE};
}

export const updateMovie = () => {
  return {type: MOVIE_UPDATE};
}

export const deleteMovie = () => {
  return {type: MOVIE_DELETE};
}