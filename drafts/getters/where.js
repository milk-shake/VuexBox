import where from '../../query/where'
import { pluck } from '../../utils'

export default state => (field, op, val) => {
  let ids = where(state.drafts, field, op, val)
  return pluck(state.drafts, ids)
}
