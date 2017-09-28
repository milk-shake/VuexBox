import Hydrate from './mutations/hydrate'
import Add from './mutations/add'
import AddAtIndex from './mutations/addAtIndex'
import Remove from './mutations/remove'
import RemoveAtIndex from './mutations/removeAtIndex'
import SwapIndices from './mutations/swapIndices'
import Empty from './mutations/empty'

/**
 * Mutations
 * generates mutation functions for all the CRUD types
 *
 * @param {object} types the mutation types
 */
export default (types, name) => {
  return Object.assign({}, Hydrate(types, name), Add(types, name), AddAtIndex(types, name), Remove(types, name), RemoveAtIndex(types, name), SwapIndices(types, name), Empty(types, name))
}
