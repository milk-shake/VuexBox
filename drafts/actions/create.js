import ValidationGenerator from '../../generators/validations'
import { ValidateSchema } from '../../validations'

export default (types, schema, opts) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    const obj = {}

    for (const field in schema) {
      obj[field] = (schema[field].default === undefined) ? null : schema[field].default
    }

    const id = 'draft-' + (Object.keys(state.drafts).length + 1)
    obj.id = id

    if (opts && opts.validate && schema) {
      if (!state.validation[obj.id]) {
        let validationObj = ValidationGenerator(schema, obj.id)
        commit('VALIDATION_CREATE', validationObj)
      }

      const validation = ValidateSchema(state.validation[obj.id], payload, true)
      validation.dirty = false
      validation.invalid = false
      commit('VALIDATION_UPDATE', validation)
    }

    commit(types[`DRAFT_CREATE`], obj)
    resolve(id)
  })
}
