import ById from './getters/byId'
import GetMessages from './getters/getMessages'
/**
 * Getters
 * generates basic getters for the validation
 */
export default () => {
  return Object.assign({},
    { validationsById: ById },
    { validationMessages: GetMessages }
  )
}
