export default (types) => {
  return {
    [types['UPDATE']] (state, payload) {
      let clone = Object.assign({}, state.all)
      clone[payload.id][payload.field] = payload.value
      state.all = clone
    }
  }
}
