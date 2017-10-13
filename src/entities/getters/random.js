import { getRandomKey } from '../../utils'

export default state => () => {
  return getRandomKey(state.all)
}