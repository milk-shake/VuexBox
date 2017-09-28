export default (types) => {
  return {
    [types[`VALIDATION_REMOVE`]] (state, payload) {
      let clone = Object.assign({}, state.all)
      delete clone[payload]
      state.validation = clone
    }
  }
}
