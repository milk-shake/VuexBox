import { capitalizeFirstLetter } from '../utils'

import get from './getters/get'
import getById from './getters/getById'
import getWhere from './getters/getWhere'
import isInList from './getters/isInList'

/**
 * Getters
 * generates basic getters for the list
 */
export default (list, filters) => {
  const capitalized = capitalizeFirstLetter(list)
  return {
    [`get${capitalized}`]: get(list),
    [`get${capitalized}ById`]: getById(list),
    [`get${capitalized}Where`]: getWhere(list),
    [`isIn${capitalized}`]: isInList(list)
  }
}
