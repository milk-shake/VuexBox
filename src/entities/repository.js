export default class Repository {
  constructor({ name, meta, types, mutations, getters, events, actions }) {
    if (!name) { throw new Error('Repository.constructor() : name is not in passed options') }
    this.name = name
    this.state = generateState({ meta })

    if (types !== false) {
      this.types = generateTypes()
    }

    if (mutations !== false) {
      this.mutations = {}
    }

    if (actions !== false) {
      this.actions = {}
    }

    if (getters !== false) {
      this.getters = {}
    }

    if (events !== false) {
      this.events = {}
    }
  }

  addMutation(name, func) {
    if (typeof name !== 'string') { throw new Error('Repository.addMutation : name is not a string') }
    if (typeof func !== 'function') { throw new Error('Repository.addMutation : second argument is not a function') }

    const mutationName = name.replace(' ', '_').toUpperCase()
    this.types[mutationName] = mutationName
    this.mutations[mutationName] = func
    this.events[mutationName] = { before: [], after: [] }
  }

  addGetter(name, func) {
    if (typeof name !== 'string') { throw new Error('Repository.addGetter : name is not a string') }
    if (typeof func !== 'function') { throw new Error('Repository.addGetter : second argument is not a function') }

    this.getters[name] = func
  }

  addAction(name, func) {
    if (typeof name !== 'string') { throw new Error('Repository.addAction : name is not a string') }
    if (typeof func !== 'function') { throw new Error('Repository.addAction : second argument is not a function') }

    this.actions[name] = func
  }

}

const generateState = ({ meta }) => {
  let state = {}
  state.all = {}

  if (meta !== false) {
    state.meta = {}
  }

  return state
}

const generateTypes = () => {
  let obj = {}
  return obj
}

const generateGetters = () => {
  let getters = {}
  return getters
}
