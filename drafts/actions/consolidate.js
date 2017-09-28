export default (types) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    commit(types[`REPLACE`], payload)
    commit(types[`DRAFT_REMOVE`], payload.id)
    resolve()
  })
}
