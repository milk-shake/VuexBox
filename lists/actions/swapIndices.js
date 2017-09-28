import { isInt } from '../../utils'

export default (types, listName) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    if (!payload || !isInt(payload.new) || !isInt(payload.old)) {
      reject(new Error('Payload is malformed, requires { new: <int>, old: <int> }'))
    }

    commit(types[`${listName.toUpperCase()}_SWAP_INDICES`], payload)
    resolve()
  })
}
