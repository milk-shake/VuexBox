export default (types, listName) => {
  return {
    [types[`${listName.toUpperCase()}_REMOVE`]] (state, payload) {
      let clone = [].concat(state[listName])
      let index = clone.indexOf(payload)

      if (index > -1) {
        clone.splice(clone.indexOf(payload), 1)
        state[listName] = clone
      }
    }
  }
}
