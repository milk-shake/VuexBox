export default (types) => {
  return {
    [types[`HYDRATE`]] (state, payload) {
      state.all = {}
      for (let id in payload) {
        state.all[payload[id].id] = payload[id]
      }
    }
  }
}
