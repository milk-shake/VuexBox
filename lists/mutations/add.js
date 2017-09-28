export default (types, listName) => {
  return {
    [types[`${listName.toUpperCase()}_ADD`]] (state, payload) {
      if (!state.all[payload]) {
        console.warn('List add: entity doesnt exists in all entities')
      }
      state[listName].push(payload)
    }
  }
}
