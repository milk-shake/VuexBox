export default (types) => {
  return {
    [types[`REPLACE`]] (state, payload) {
      let clone = Object.assign({}, state.all)
      clone[payload.id] = payload
      state.all = clone
    }
  }
}
