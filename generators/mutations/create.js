export default (types) => {
  return {
    [types['CREATE']] (state, payload) {
      state.all[payload.id] = payload
    }
  }
}
