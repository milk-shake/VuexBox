export default (state, payload) => {
  if (!payload.id) { throw new Error('Mutation update : payload does not have an id') }
  if (!payload.field) { throw new Error('Mutation update: Payload does not have a field') }
  if (!payload.value) { throw new Error('Mutation update : payload does not have a value') }
  if (!state.all) { throw new Error('Mutation update : state does not have all property') }
  if (!state.all[payload.id]) { throw new Error('Mutation update : state does not have the entity') }

  let clone = Object.assign({}, state)
  clone.all[payload.id][payload.field] = payload.value
  state = clone

  return clone
}