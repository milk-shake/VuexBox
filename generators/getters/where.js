import where from '../../query/where'
import { pluck } from '../../utils'

export default state => (field, op, val) => {
  let ids = where(state.all, field, op, val)
  return pluck(state.all, ids)
}
