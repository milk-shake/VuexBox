export default (listName) => state => {
  let all = state.all
  let id = state[listName]
  let ret = []

  id.forEach((id) => {
    ret.push(all[id])
  })
  return ret
}
