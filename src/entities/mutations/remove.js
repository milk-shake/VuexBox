export default (state, payload) => {
  if (!state.all) { throw new Error('Mutation remove : state.all does not exist on state') }
  if (!payload) { throw new Error('Mutation remove : payload is undefined') }
  if (!state.all[payload]) { throw new Error('Mutation remove : entity doesnt exist') }

  let clone = Object.assign({}, state)
  delete clone.all[payload]
  state = clone

  return clone
}
