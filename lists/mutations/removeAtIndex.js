export default (types, listName) => {
  return {
    [types[`${listName.toUpperCase()}_REMOVE_AT_INDEX`]] (state, payload) {
      state[listName].splice(payload, 1)
    }
  }
}
