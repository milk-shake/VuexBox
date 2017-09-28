import { isInt } from '../../utils'

export default (types, listName) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    if (!payload || !isInt(payload)) {
      reject(new Error('Sub stores can only store integer id keys, not whole objects. Save the id in here.'))
    }
    commit(types[`${listName.toUpperCase()}_ADD`], payload)
    resolve()
  })
}
