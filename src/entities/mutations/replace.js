export default (state, payload) => {
  if (!state.all) { throw new Error('Mutation replace : state does not have an all property') }
  if (!payload.id) { throw new Error('Mutation replace : payload does not have an id') }
  if (!state.all[payload.id]) { throw new Error('Mutation relace : entity doesnt exist') }

  let clone = Object.assign({}, state)
  clone.all[payload.id] = payload
  state = clone

  return clone
}