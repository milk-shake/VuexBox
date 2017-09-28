export default (types) => {
  return {
    [types[`REMOVE`]] (state, payload) {
      let clone = Object.assign({}, state.all)
      delete clone[payload]
      state.all = clone
    }
  }
}
