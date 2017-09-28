export default (listName) => state => (id) => {
  return state[listName].indexOf(id) !== -1
}
