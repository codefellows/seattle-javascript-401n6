// if you pass a function in then thunk will simply call the function.
// the function receives two parameters (dispatch, state) so it can
// dispatch more functions itself in the future.
// 
// dispatch((dispatch, store) => {
//   setInterval(() => dispatch(tickPerSecond), 1000);
// })
// 
// import {showResults} from './actions/search-actions';
// dispatch((dispatch, store) => {
//   fetch('http://www.reddit.com/r/movies.json')
//   .then(res => res.json())
//   .then(json => {
//     dispatch(showResults(json));
//   });
// })
const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);

export default thunk;