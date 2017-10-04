export default (types) => {
  return {
    [types[`VALIDATION_ADD`]] (state, payload) {
      let clone = Object.assign({}, state.validation)
      clone[payload.id] = payload
      state.validation = clone
    }
  }
}
