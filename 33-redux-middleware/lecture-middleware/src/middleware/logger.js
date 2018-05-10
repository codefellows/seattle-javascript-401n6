const logger = store => next => action => {
  console.log('ACTION', action, store.getState());
  let result = next(action);
  console.log('RESULT', store.getState());
  return result;
};

export default logger;
