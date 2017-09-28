export default (types) => {
  return {
    [types[`DRAFT_ADD`]] (state, payload) {
      state.drafts[payload.id] = payload
    }
  }
}
