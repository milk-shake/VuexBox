export default class Model {
  constructor({ name, schema }) {
    if (!name) { throw new Error('Model.constructor : name needs to be passed') }
    if (typeof name !== 'string') { throw new Error('Model.constructor : name is not a string') }
    this.name = name

    for (const prop in schema) {
      Object.defineProperty(this, prop, {
        enumerable: schema[prop].enumerable !== undefined ? schema[prop].enumerable : true,
        configurable: schema[prop].configurable !== undefined ? schema[prop].configurable : true,
        writable: schema[prop].writable !== undefined ? schema[prop].writable : true,
        value: schema[prop].default
      })
    }
  }
}