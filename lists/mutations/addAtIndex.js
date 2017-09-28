export default (types, listName) => {
  return {
    [types[`${listName.toUpperCase()}_ADD_AT_INDEX`]] (state, payload) {
      if (!state.all[payload]) {
        console.warn('List add: entity doesnt exists in all entities')
      }
      state[listName].splice(payload.index, 0, payload.value)
    }
  }
}
