export default (types, listName) => {
  return {
    [types[`${listName.toUpperCase()}_HYDRATE`]] (state, payload) {
      state[listName] = payload
    }
  }
}
