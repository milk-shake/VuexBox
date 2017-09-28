import { capitalizeFirstLetter } from '../utils'
import Add from './actions/add'
import Remove from './actions/remove'

import AddAtIndex from './actions/addAtIndex'
import RemoveAtIndex from './actions/removeAtIndex'

import Hydrate from './actions/hydrate'
import Empty from './actions/empty'

/**
 * List Actions
 * generates all the list actions
 *
 * @param {object} types the types generated
 */
export default (types, name) => {
  const capitalized = capitalizeFirstLetter(name)
  return {
    [`hydrate${capitalized}`]: Hydrate(types, name),
    [`add${capitalized}`]: Add(types, name),
    [`add${capitalized}AtIndex`]: AddAtIndex(types, name),
    [`remove${capitalized}`]: Remove(types, name),
    [`remove${capitalized}AtIndex`]: RemoveAtIndex(types, name),
    [`empty${capitalized}`]: Empty(types, name)
  }
}
