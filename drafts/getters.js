import All from './getters/all'
import ById from './getters/byId'
import Where from './getters/where'

/**
 * Getters
 * generates basic getters for the drafts
 */
export default () => {
  return Object.assign({},
    { allDrafts: All },
    { draftsById: ById },
    { draftsWhere: Where }
  )
}
