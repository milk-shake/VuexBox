import where from '../../query/where'
import { pluck } from '../../utils'

export default state => (field, op, val) => {
  if (!state.all) { throw new Error('Getters where : state.all is not defined') }
  let ids = where(state.all, field, op, val)
  return pluck(state.all, ids)
}