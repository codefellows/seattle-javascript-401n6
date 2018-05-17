export const MOVIE_CREATE = 'MOVIE_CREATE';
export const MOVIE_UPDATE = 'MOVIE_UPDATE';
export const MOVIE_DELETE = 'MOVIE_DELETE';

export const createMovie = (movie) => {
  return {type: MOVIE_CREATE, movie};
}

export const updateMovie = (movie) => {
  return {type: MOVIE_UPDATE, movie};
}

export const deleteMovie = (movie) => {
  return {type: MOVIE_DELETE, movie};
}