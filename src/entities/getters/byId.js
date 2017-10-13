export default state => (id) => {
  if (state.all === undefined) { throw new Error('Getter byId : state.all doesnt exist') }
  return state.all[id]
}