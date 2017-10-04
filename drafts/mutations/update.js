export default (types) => {
  return {
    [types['DRAFT_UPDATE']] (state, payload) {
      let obj = Object.assign({}, state.drafts[payload.id])
      obj[payload.field] = payload.value
      state.drafts[payload.id] = obj
    }
  }
}
