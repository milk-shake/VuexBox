export default (types) => {
  return {
    [types['VALIDATION_CREATE']] (state, payload) {
      state.validation[payload.id] = payload
    }
  }
}
