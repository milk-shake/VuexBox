import Repository from './entities/repository'
import * as Getters from './entities/getters'
import * as Actions from './entities/actions'

export default class Factory {

  static CreateStore(name, schema, options) {
    if (!name) { throw new Error('Factory.CreateStore : name is not defined') }
    if (typeof name !== 'string') { throw new Error('Factory.CreateStore : name is not a string') }
    let repository = Repository(name)
    console.log('reponsitory', repository)
  }
}