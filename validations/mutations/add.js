export default (types) => {
  return {
    [types[`VALIDATION_ADD`]] (state, payload) {
      let clone = Object.assign({}, state.all)
      clone[payload.id] = payload
      state.validation = clone
    }
  }
}
