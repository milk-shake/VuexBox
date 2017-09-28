import ValidationGenerator from '../validations'
import { ValidateSchema } from '../../validations'

export default (types, schema, opts) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    if (opts && opts.validate && schema) {
      if (!state.validation[payload.id]) {
        let validationObj = ValidationGenerator(schema, payload.id)
        commit('VALIDATION_CREATE', validationObj)
      }

      const validation = ValidateSchema(state.validation[payload.id], payload)
      validation.dirty = true

      commit('VALIDATION_UPDATE', validation)
    }

    commit(types[`CREATE`], payload)
    resolve()
  })
}
