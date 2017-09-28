import ValidationGenerator from '../validations'
import { ValidateSchema } from '../../validations'

export default (types, schema, opts) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    if (opts && opts.validate && schema) {
      if (!state.validation[payload.id]) {
        ValidationGenerator(state, schema, payload.id)
      }

      const validation = ValidateSchema(state.validation[payload.id], payload)
      validation.dirty = true

      commit('VALIDATION_UPDATE', validation)
    }

    commit(types[`REPLACE`], payload)
    resolve()
  })
}
