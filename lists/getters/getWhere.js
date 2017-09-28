import where from '../../query/where'
import { pluck } from '../../utils'

export default (listName) => state => (field, op, val) => {
  let ids = state[listName]
  let items = pluck(state.all, ids)

  return pluck(state.all, where(items, field, op, val))
}
