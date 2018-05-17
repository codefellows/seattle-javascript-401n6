export const MOVIE_CREATE = 'MOVIE_CREATE';
export const MOVIE_UPDATE = 'MOVIE_UPDATE';
export const MOVIE_DELETE = 'MOVIE_DELETE';
export const MOVIE_DATA_INFLATE = 'MOVIE_DATA_INFLATE';

export const createMovie = (movie) => {
  return {type: MOVIE_CREATE, movie};
}

export const updateMovie = (movie) => {
  return {type: MOVIE_UPDATE, movie};
}

export const deleteMovie = (movie) => {
  return {type: MOVIE_DELETE, movie};
}

export const inflateMovies = (data) => {
  return {type: MOVIE_DATA_INFLATE, data};
}