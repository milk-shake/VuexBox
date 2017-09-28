import Add from './actions/add'
import Update from './actions/update'
import Remove from './actions/remove'
import Create from './actions/create'
import Replace from './actions/replace'
/**
 * Actions
 * generates the actions based on the default types
 *
 * @param {object} types the types generated
 */
export default (types, schema, opts) => {
  return Object.assign({},
    { add: Add(types, schema, opts) },
    { update: Update(types, schema, opts) },
    { remove: Remove(types) },
    { create: Create(types, schema, opts) },
    { replace: Replace(types, schema, opts) }
  )
}
