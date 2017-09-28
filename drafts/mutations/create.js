export default (types) => {
  return {
    [types['DRAFT_CREATE']] (state, payload) {
      state.drafts[payload.id] = payload
    }
  }
}
