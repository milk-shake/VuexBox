export default (types) => {
  return {
    [types[`ADD`]] (state, payload) {
      let clone = Object.assign({}, state)
      clone.all[payload.id] = payload
      state = clone
    }
  }
}
