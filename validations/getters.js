import ById from './getters/byId'

/**
 * Getters
 * generates basic getters for the validation
 */
export default () => {
  return Object.assign({},
    { validationsById: ById }
  )
}
