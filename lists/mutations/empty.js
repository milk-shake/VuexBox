export default (types, listName) => {
  return {
    [types[`${listName.toUpperCase()}_EMPTY`]] (state, payload) {
      state[listName] = []
    }
  }
}
