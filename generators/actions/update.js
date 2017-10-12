import ValidationGenerator from '../validations'
import { ValidateSchema } from '../../validations'

export default (types, schema, opts) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    if (opts && opts.validate && schema) {
      if (opts.drafts) {
        if (!state.drafts[payload.id]) {
          commit('DRAFT_ADD', state.all[payload.id])
        }
        dispatch('updateDraft', payload)
          .then(resolve)
      }

      if (!state.validation[payload.id]) {
        let validationObj = ValidationGenerator(schema, payload.id)
        commit('VALIDATION_CREATE', validationObj)
      }

      const clone = (opts.drafts) ? Object.assign({}, state.drafts[payload.id]) || Object.assign({}, state.all[payload.id]) : Object.assign({}, state.all[payload.id])
      clone[payload.field] = payload.value

      const validationClone = JSON.parse(JSON.stringify(Object.assign({}, state.validation[payload.id])))

      const validation = ValidateSchema(validationClone, clone)
      validation.dirty = true

      let updated = Object.assign({}, validationClone, validation)
      commit('VALIDATION_UPDATE', updated)
    }

    commit(types[`UPDATE`], payload)
    resolve()
  })
}
