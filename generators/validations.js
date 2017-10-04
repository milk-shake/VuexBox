/**
 * Validation
 * generates validation objects for an entity, which
 * is saved in the validations state by the same id
 *
 * @param {state}  the state
 * @param {schema} the schema to validate against
 * @param {id}     the id of the current object to test
 */
export default (schema, id) => {
  let obj = {}
  obj = {}
  obj.errors = false
  obj.dirty = false
  obj.id = id

  for (const field in schema) {
    if (schema[field].validations) {
      let validations = {
        dirty: false,
        error: false,
        invalid: false
      }

      let validatorsStatus = schema[field].validations.reduce((prev, curr) => {
        prev[curr] = false
        return prev
      }, {})
      obj[field] = validations
      obj[field].errors = validatorsStatus
    }
  }

  return obj
}
