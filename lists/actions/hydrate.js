export default (types, listName) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    commit(types[`${listName.toUpperCase()}_HYDRATE`])
    resolve()
  })
}
