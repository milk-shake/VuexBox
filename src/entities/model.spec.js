/* global describe, it, before */

import chai from 'chai';
import Model from './model';

chai.expect();
const expect = chai.expect;

let model;
let modelName = {
  valid: 'Model',
  invalid: [1, true, [], {}, null, undefined]
}
let modelSchema = {
  valid: {
    id: {
      type: 'integer'
    },
    title: {
      type: 'string'
    },
    body: {
      type: 'string'
    }
  },
  invalid: [1, true, [], null, undefined]
}

describe('Entity: Model', () => {
  describe('Constructor', () => {
    it('should accept an object of options', () => {
      model = new Model({ name: modelName.valid })
      expect(model).to.be.instanceof(Model)
    })

    it('should set the name if passed as an option', () => {
      model = new Model({ name: modelName.valid })
      expect(model).to.have.property('name')
      expect(model.name).to.equal(modelName.valid)
    })

    it('should throw an error if the name is not passed', () => {
      expect(() => {
        new Model()
      })
        .to.throw(Error)
    })

    it('should throw and error if the name is not a string', () => {
      expect(() => {
        let errors = modelName.invalid.map(type => {
          try {
            new Model({ name: type })
            return false
          }
          catch (error) {
            return true
          }
        })
        if (errors.indexOf(false) === -1) {
          throw new Error()
        }
      })
        .to.throw(Error)
    })

    it('should accept the schema in the options object', () => {
      let name = 'test'
      model = new Model({ name: name, schema: {} })
    })

    it('should set properties on the model to match the schema', () => {
      model = new Model({ name: modelName.valid, schema: modelSchema.valid })
      for (let prop in modelSchema.valid) {
        expect(model).to.have.property(prop)
      }
    })

    it('should set a default value on the model if passed in the schema', () => {
      let defaultTitle = 'Default title'
      let schema = {
        id: {
          type: 'integer'
        },
        title: {
          type: 'string',
          default: defaultTitle
        }
      }
      model = new Model({ name: modelName.valid, schema: schema })
      expect(model.title).to.equal(defaultTitle)
    })

    it('should set a property to read only if writable is false in schema', () => {
      let schema = {
        title: {
          type: 'string',
          writable: false,
          default: 'static'
        }
      }

      model = new Model({ name: modelName.valid, schema: schema })
      expect(() => {
        model.title = 'throw error'
      })
        .to.throw(Error)
    })

    it('should not list the property if enumerable is set to false in schema', () => {
      let schema = {
        title: {
          type: 'string',
          default: 'title',
          enumerable: false
        }
      }
      model = new Model({ name: modelName.valid, schema: schema })
      expect(() => {
        for (const prop in model) {
          if (prop === 'title') {
            throw new Error()
          }
        }
      })
        .to.not.throw(Error)
    })

    it('should disallow changes to the property if configurable is set to false', () => {
      let schema = {
        title: {
          type: 'string',
          default: 'title',
          configurable: false
        }
      }
      model = new Model({ name: modelName.valid, schema: schema })
      expect(() => {
        delete model.title
      })
        .to.throw(Error)
    })
  })

  describe('From', () => {
    it('should create a new instance from the passed in options', () => {
      model = new Model({ name: modelName.valid, schema: modelSchema.valid })
      expect(model).to.be.instanceof(Model)
    })
  })
})
