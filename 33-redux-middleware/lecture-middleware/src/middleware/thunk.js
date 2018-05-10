// book worms: https://en.wikipedia.org/wiki/Thunk
const thunk = store => next => action => {
  console.log('thunk');
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState());
  } else {
    return next(action);
  }
};

export default thunk;