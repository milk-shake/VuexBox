/* global describe, it, before */

import chai from 'chai';
import Repository from './repository';

chai.expect();
const expect = chai.expect;

let repository;
let name = {
  valid: 'Valid Name',
  invalid: [1, true, {}, [], null, undefined]
}

let mutationName = {
  valid: 'TEST_MUTATION',
  invalid: [1, true, {}, [], null, undefined]
}

let mutationFunc = {
  valid: () => { },
  invalid: ['error', 1, true, {}, [], null, undefined]
}

let getterName = {
  valid: 'byId',
  invalid: [1, true, {}, [], null, undefined]
}

let getterFunc = {
  valid: () => { },
  invalid: ['error', 1, true, {}, [], null, undefined]
}

let actionName = {
  valid: 'create',
  invalid: [1, true, {}, [], null, undefined]
}

let actionFunc = {
  valid: () => { },
  invalid: ['error', 1, true, {}, [], null, undefined]
}


describe('Entity: Repository', () => {
  describe('Constructor', () => {

    it('should accept an object of options', () => {
      repository = new Repository({ name: 'Test' })
      expect(repository).to.be.instanceof(Repository)
    })

    describe('Name', () => {
      it('should throw an error if name is not present in options', () => {
        expect(() => { let repository = new Repository() }).to.throw(Error)
      })

      it('should throw an error if the name is not a string', () => {
        expect(() => {
          name.invalid.forEach(type => new Repository(type))
        })
          .to.throw(Error)
      })

      it('should not throw an error if the name is valid', () => {
        expect(() => {
          let repository = new Repository(name.valid)
            .to.not.throw(Error)
        })
      })

      it('should set the repository name to the passed name', () => {
        repository = new Repository({ name: name.valid })
        expect(repository.name).to.equal(name.valid)
      })
    })

    describe('State', () => {
      it('should create a state object on the instance', () => {
        repository = new Repository({ name: name.valid })
        expect(repository).to.have.property('state')
      })

      it('should create an all property on the state', () => {
        repository = new Repository({ name: name.valid })
        expect(repository.state).to.have.property('all')
      })

      it('should create the all property as an object', () => {
        repository = new Repository({ name: name.valid })
        expect(repository.state.all).to.be.an('object')
      })

      it('should create a meta propety on the state', () => {
        repository = new Repository({ name: name.valid })
        expect(repository.state).to.have.property('meta')
      })

      it('should not create a meta property if option [meta] is set to false', () => {
        repository = new Repository({ name: name.valid, meta: false })
        expect(repository.state).to.not.have.property('meta')
      })
    })

    describe('Types', () => {
      it('should create a types object on the instance', () => {
        repository = new Repository({ name: name.valid })
        expect(repository).to.have.property('types')
      })

      it('should not create a types object on the instance if option [types] is false', () => {
        repository = new Repository({ name: name.valid, types: false })
        expect(repository).to.not.have.property('types')
      })
    })

    describe('Mutations', () => {
      it('should create a mutations object on the instance', () => {
        repository = new Repository({ name: name.valid })
        expect(repository).to.have.property('mutations')
      })

      it('should not create a mutations object on the instance if options [mutations] is false', () => {
        repository = new Repository({ name: name.valid, mutations: false })
        expect(repository).to.not.have.property('mutations')
      })
    })

    describe('Getters', () => {
      it('should create a getters object on the instance', () => {
        repository = new Repository({ name: name.valid })
        expect(repository).to.have.property('getters')
      })

      it('should not create a getters object on the instance if options [getters] is false', () => {
        repository = new Repository({ name: name.valid, getters: false })
        expect(repository).to.not.have.property('getters')
      })
    })

    describe('Action', () => {
      it('should create a action object on the instance', () => {
        repository = new Repository({ name: name.valid })
        expect(repository).to.have.property('actions')
      })

      it('should not create an actions object on the instance if options [actions] is false', () => {
        repository = new Repository({ name: name.valid, actions: false })
        expect(repository).to.not.have.property('actions')
      })
    })

    describe('Events', () => {
      it('should create an events object on the instance', () => {
        repository = new Repository({ name: name.valid })
        expect(repository).to.have.property('events')
      })

      it('should not create an events object on the instance if options [events] is false', () => {
        repository = new Repository({ name: name.valid, events: false })
        expect(repository).to.not.have.property('events')
      })
    })
  })

  describe('AddMutation', () => {
    beforeEach(() => {
      repository = new Repository({ name: name.valid })
    })

    it('should accept a string as the first argument', () => {
      expect(() => { repository.addMutation(mutationName.valid, mutationFunc.valid) }).to.not.throw(Error)
    })

    it('should throw an error if the first argument is not a string', () => {
      expect(() => {
        let errors = mutationName.invalid.map(name => {
          try {
            repository.addMutation(name)
            return false
          }
          catch (exception) {
            return true
          }
        })

        if (errors.indexOf(false) === -1) {
          throw new Error()
        }
      })
        .to.throw(Error)
    })

    it('should accept a function as the second argument', () => {
      expect(() => { repository.addMutation(mutationName.valid, mutationFunc.valid) }).to.not.throw(Error)
    })

    it('should throw an error if the second argument is not a function', () => {
      expect(() => {
        let errors = mutationFunc.invalid.map(type => {
          try {
            repository.addMutation(mutationName.valid, type)
            return false
          }
          catch (exception) {
            return true
          }
        })

        if (errors.indexOf(false) === -1) {
          throw new Error()
        }
      })
        .to.throw(Error)
    })

    it('should create a new type based upon the name', () => {
      repository.addMutation(mutationName.valid, mutationFunc.valid)
      expect(repository.types).to.have.property(mutationName.valid)
    })

    it('should create a new mutation based upon the name', () => {
      repository.addMutation(mutationName.valid, mutationFunc.valid)
      expect(repository.mutations).to.have.property(mutationName.valid)
    })

    it('should create a new mutation that is a function', () => {
      repository.addMutation(mutationName.valid, mutationFunc.valid)
      expect(repository.mutations[mutationName.valid]).to.be.a('function')
    })

    it('should create a new mutation using the function passed', () => {
      repository.addMutation(mutationName.valid, mutationFunc.valid)
      expect(repository.mutations[mutationName.valid]).to.be.equal(mutationFunc.valid)
    })

    it('should replace spaces with underscores in the name and uppercase', () => {
      let name = 'test mutation'
      let validName = 'TEST_MUTATION'
      repository.addMutation(name, mutationFunc.valid)
      expect(repository.mutations).to.have.property(validName)
    })

    it('should create an events property with mutation name', () => {
      repository.addMutation(mutationName.valid, mutationFunc.valid)
      expect(repository.events).to.have.property(mutationName.valid)
    })

    it('should create the lifecycle events for the mutation name', () => {
      repository.addMutation(mutationName.valid, mutationFunc.valid)
      expect(repository.events[mutationName.valid]).to.have.property('before')
      expect(repository.events[mutationName.valid]).to.have.property('after')
    })
  })

  describe('AddGetter', () => {
    beforeEach(() => {
      repository = new Repository({ name: name.valid })
    })

    it('should accept a string as its first argument', () => {
      expect(() => {
        repository.addGetter(getterName.valid, getterFunc.valid)
      })
        .to.not.throw(Error)
    })

    it('should throw an error if the first argument is not a string', () => {
      expect(() => {
        let errors = getterName.invalid.map(type => {
          try {
            repository.addMutation(getterName.invalid, getterFunc.valid)
            return false
          }
          catch (exception) {
            return true
          }
        })
        if (errors.indexOf(false) === -1) {
          throw new Error()
        }
      })
        .to.throw(Error)
    })

    it('should accept a function as the second argument', () => {
      expect(() => { repository.addGetter(getterName.valid, getterFunc.valid) }).to.not.throw(Error)
    })

    it('should throw an error if the second argument is not a function', () => {
      expect(() => {
        let errors = getterFunc.invalid.map(type => {
          try {
            repository.addGetter(getterName.valid, type)
            return false
          }
          catch (exception) {
            return true
          }
        })

        if (errors.indexOf(false) === -1) {
          throw new Error()
        }
      })
        .to.throw(Error)
    })

    it('should create a getter with the passed name', () => {
      repository.addGetter(getterName.valid, getterFunc.valid)
      expect(repository.getters).to.have.property(getterName.valid)
    })

    it('should create a getter with the passed function', () => {
      repository.addGetter(getterName.valid, getterFunc.valid)
      expect(repository.getters[getterName.valid]).to.equal(getterFunc.valid)
    })
  })

  describe('AddAction', () => {
    beforeEach(() => {
      repository = new Repository({ name: name.valid })
    })

    it('should accept a string as its first argument', () => {
      expect(() => {
        repository.addAction(actionName.valid, actionFunc.valid)
      })
        .to.not.throw(Error)
    })

    it('should throw an error if the first argument is not a string', () => {
      expect(() => {
        let errors = actionName.invalid.map(type => {
          try {
            repository.addAction(actionName.invalid, actionFunc.valid)
            return false
          }
          catch (exception) {
            return true
          }
        })
        if (errors.indexOf(false) === -1) {
          throw new Error()
        }
      })
        .to.throw(Error)
    })

    it('should accept a function as the second argument', () => {
      expect(() => { repository.addAction(actionName.valid, actionFunc.valid) }).to.not.throw(Error)
    })

    it('should throw an error if the second argument is not a function', () => {
      expect(() => {
        let errors = actionFunc.invalid.map(type => {
          try {
            repository.addAction(actionName.valid, type)
            return false
          }
          catch (exception) {
            return true
          }
        })

        if (errors.indexOf(false) === -1) {
          throw new Error()
        }
      })
        .to.throw(Error)
    })

    it('should create an action with the passed name', () => {
      repository.addAction(actionName.valid, actionFunc.valid)
      expect(repository.actions).to.have.property(actionName.valid)
    })

    it('should create a action with the passed function', () => {
      repository.addAction(actionName.valid, actionFunc.valid)
      expect(repository.actions[actionName.valid]).to.equal(actionFunc.valid)
    })
  })
})
