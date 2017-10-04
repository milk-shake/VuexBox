export default (types) => {
  return {
    [types[`DRAFT_REMOVE`]] (state, payload) {
      let clone = Object.assign({}, state.drafts)
      delete clone[payload]
      state.drafts = clone
    }
  }
}
