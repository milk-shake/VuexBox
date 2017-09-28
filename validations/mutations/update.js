export default (types) => {
  return {
    [types['VALIDATION_UPDATE']] (state, payload) {
      state.validation[payload.id] = payload
    }
  }
}
