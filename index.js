import StateGenerator from './generators/state'
import TypesGenerator from './generators/types'
import MutationsGenerator from './generators/mutations'
import ActionsGenerator from './generators/actions'
import GettersGenerator from './generators/getters'

import ListTypesGenerator from './lists/types'
import ListActionsGenerator from './lists/actions'
import ListMutationsGenerator from './lists/mutations'
import ListGettersGenerator from './lists/getters'

import ValidationTypesGenerator from './validations/types'
import ValidationMutationsGenerator from './validations/mutations'
import ValidationGettersGenerator from './validations/getters'

import DraftsTypesGenerator from './drafts/types'
import DraftsActionsGenerator from './drafts/actions'
import DraftsMutationsGenerator from './drafts/mutations'
import DraftsGettersGenerator from './drafts/getters'

const defaultOpts = {
  generateActions: true, // generate actions
  generateMutations: true, // generate mutations
  generateGetters: true, // generate getters
  generateState: true, // generate the state
  generateTypes: true,
  generateValidations: true, // generate the validations
  generateRelationships: true, // generates the relationships,
  validate: true, // validate the model on every update/create
  drafts: true,
  namespaced: true // whether this module is namespaced
}

export default class {
  constructor (opts = {}) {
    this.opts = Object.assign(defaultOpts, opts)

    this.namespaced = this.opts.namespaced
    this.generators = {
      state: StateGenerator,
      types: TypesGenerator,
      mutations: MutationsGenerator,
      actions: ActionsGenerator,
      getters: GettersGenerator,
      lists: {
        types: ListTypesGenerator,
        mutations: ListMutationsGenerator,
        actions: ListActionsGenerator,
        getters: ListGettersGenerator
      }
    }

    this.state = {}
    this.getters = {}
    this.actions = {}
    this.mutations = {}
    this.types = {}
    this.schema = {}

    if (this.opts.validate) {
      this.validation = {}
    }

    if (this.opts.drafts) {
      this.drafts = {}
    }
  }

  createModel (name, model = {}) {
    if (!name) { throw new Error('Model needs a name') }

    this.state = {}
    this.getters = {}
    this.actions = {}
    this.mutations = {}
    this.types = {}
    this.schema = {}

    this.schema = model

    if (this.opts.generateState) {
      this.state = this.generators.state()
    }

    if (this.opts.generateTypes) {
      this.types = this.generators.types()
    }

    if (this.opts.generateMutations) {
      this.mutations = this.generators.mutations(this.types)
    }

    if (this.opts.generateActions) {
      this.actions = this.generators.actions(this.types, this.schema, this.opts)
    }

    if (this.opts.generateGetters) {
      this.getters = this.generators.getters()
    }

    if (this.opts.validate) {
      this.state.validation = this.state.validation || {}
      this.types = Object.assign(this.types, ValidationTypesGenerator())
      this.mutations = Object.assign(this.mutations, ValidationMutationsGenerator(this.types))
      this.getters = Object.assign(this.getters, ValidationGettersGenerator())
    }

    if (this.opts.drafts) {
      this.state.drafts = this.state.drafts || {}
      this.types = Object.assign(this.types, DraftsTypesGenerator())
      this.mutations = Object.assign(this.mutations, DraftsMutationsGenerator(this.types))
      this.actions = Object.assign(this.actions, DraftsActionsGenerator(this.types, this.schema, this.opts))
      this.getters = Object.assign(this.getters, DraftsGettersGenerator())
      console.log(this.getters)
    }

    return this
  }
  /**
   * State
   * Creates a new state list, along with new mutations, actions and getters for the list
   *
   * @param {string} name the state name
   */
  createList (name) {
    this.state[name] = []

    let listTypes = this.generators.lists.types(name)
    let listMutations = this.generators.lists.mutations(listTypes, name)
    let listActions = this.generators.lists.actions(listTypes, name)
    let listGetters = this.generators.lists.getters(name)

    this.types = Object.assign(this.types, listTypes)
    this.mutations = Object.assign(this.mutations, listMutations)
    this.actions = Object.assign(this.actions, listActions)
    this.getters = Object.assign(this.getters, listGetters)
  }
  /**
   * CreateState
   * creates a new state key which is initialised to the value or null
   *
   * @param {sring} name the name of the state key
   * @param {any}   value the value to set the state key to, if needed and not using hydrate
   */
  createState (name, value) {
    this.state[name] = value || null
  }
  /**
   * CreateAction
   * generates a custom action when called
   *
   * @param {string}   name the action name
   * @param {function} func the function to be called as an action, has the same signature as a VueX mutation
   */
  createAction (name, func) {
    this.actions[name] = func || function () { }
  }
  /**
   * CreateMutation
   * generates a custom mutation and type when called
   *
   * @param {string}   type the mutation name
   * @param {function} func the function to be called when the mutation is run, has the same signature as a VueX mutation
   */
  createMutation (type, func) {
    const mutation = `${type.toUpperCase()}`
    this.types[mutation] = mutation
    this.mutations[mutation] = func
  }
  /**
   * CreateGetter
   * generates a custom getter function when called
   *
   * @param {string}   name the name of the getter
   * @param {function} func the function to call for the getter
   */
  createGetter (name, func) {
    this.getters[name] = func
  }
}
