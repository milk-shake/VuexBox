export default (listName) => state => id => {
  if (state[listName].indexOf(id) > -1) {
    return state.all[id]
  }

  return null
}
