import { isInt } from '../../utils'

export default (types, listName) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    if (!payload || !isInt(payload)) {
      reject(new Error('Payload is not an int'))
    }

    commit(types[`${listName.toUpperCase()}_ADD_AT_INDEX`], payload)
    resolve()
  })
}
