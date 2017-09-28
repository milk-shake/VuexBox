/**
 * Validation
 * generates validation objects on a per use basis
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
    let validations = {
      dirty: false,
      error: false
    }

    let validatorsStatus = schema[field].validations.reduce((prev, curr) => {
      prev[curr] = false
      return prev
    }, {})
    obj[field] = validations
    obj[field].validators = validatorsStatus
  }

  return obj
}
