export default (types) => {
  return {
    [types[`DRAFT_REMOVE`]] (state, payload) {
      let clone = Object.assign({}, state.all)
      delete clone[payload]
      state.draft = clone
    }
  }
}
