export default (types, listName) => {
  return {
    [types[`${listName.toUpperCase()}_SWAP_INDICES`]] (state, payload) {
      const clone = [].concat(state[listName])
      let val = clone.splice(payload.old, 1)
      clone.splice(payload.new, 0, val[0])
      state[listName] = clone
    }
  }
}
