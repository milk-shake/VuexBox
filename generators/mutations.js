import Hydrate from './mutations/hydrate'
import Add from './mutations/add'
import Remove from './mutations/remove'
import Update from './mutations/update'
import Create from './mutations/create'

/**
 * Mutations
 * generates mutation functions for all the CRUD types
 *
 * @param {object} types the mutation types
 */
export default (types) => {
  return Object.assign({}, Hydrate(types), Add(types), Remove(types), Update(types), Create(types))
}
