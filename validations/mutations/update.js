export default (types) => {
  return {
    [types['VALIDATION_UPDATE']] (state, payload) {
      const clone = Object.assign({}, state.validation)
      clone[payload.id] = payload
      state.validation = clone
    }
  }
}
