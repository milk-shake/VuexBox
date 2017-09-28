import Add from './mutations/add'
import Remove from './mutations/remove'
import Update from './mutations/update'
import Create from './mutations/create'

/**
 * Mutations
 * generates mutation functions for the validation object
 *
 * @param {object} types the mutation types
 */
export default (types) => {
  return Object.assign({}, Add(types), Remove(types), Update(types), Create(types))
}
