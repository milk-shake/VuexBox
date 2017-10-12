export default (state, payload) => {
  if (!state.all) { throw new Error('Mutation add : state.all does not exist on state') }
  if (!payload.id) throw new Error('Mutation add : payload does not have an id')

  let clone = Object.assign({}, state)
  clone.all[payload.id] = payload
  state = clone

  return clone
}