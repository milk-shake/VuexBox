export default (types) => {
  return {
    [types['UPDATE']] (state, payload) {
      let obj = state.all[payload.id]
      obj[payload.field] = payload.value
      state.all[payload.id] = obj
    }
  }
}
