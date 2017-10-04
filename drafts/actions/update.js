import ValidationGenerator from '../../generators/validations'
import { ValidateSchema } from '../../validations'

export default (types, schema, opts) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    if (opts && opts.validate && schema) {
      if (!state.validation[payload.id]) {
        let validationObj = ValidationGenerator(schema, payload.id)
        commit('VALIDATION_CREATE', validationObj)
      }

      const clone = Object.assign({}, state.all[payload.id])
      clone[payload.field] = payload.value

      const validationClone = JSON.parse(JSON.stringify(Object.assign({}, state.validation[payload.id])))
      const validation = ValidateSchema(validationClone, clone)
      validation.dirty = true

      commit('VALIDATION_UPDATE', validation)
    }

    commit(types[`DRAFT_UPDATE`], payload)
    resolve()
  })
}
