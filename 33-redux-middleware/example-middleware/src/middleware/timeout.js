const timeout = store => next => action => {
  if (!action.meta || !action.meta.delay) {
    return next(action)
  }

  const timeoutId = setTimeout(
    () => {
      console.log('timed out')
      next(action)
    },
    action.meta.delay
  )

  return function cancel() {
    clearTimeout(timeoutId)
  }
}

export default timeout;