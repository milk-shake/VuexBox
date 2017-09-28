import All from './getters/all'
import ById from './getters/byId'
import Random from './getters/random'
import Where from './getters/where'

/**
 * Getters
 * generates basic getters for the state
 */
export default () => {
  return Object.assign({},
    { all: All },
    { byId: ById },
    { random: Random },
    { where: Where }
  )
}
