export default state => (id) => {
  let all = state.validation
  return all[id]
}
