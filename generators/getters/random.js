import { getRandomKey } from '../../utils'

export default state => () => getRandomKey(state.all)
