/**
 * Types
 * generates the custom CRUD actions for every store created
 * with the helper
 *
 * ADD: Adds a validation object to the state
 * REMOVE: removes a validation object from the state
 * UPDATE: updates a validation object from the state
 */
export default () => {
  return {
    [`VALIDATION_ADD`]: `VALIDATION_ADD`,
    [`VALIDATION_REMOVE`]: `VALIDATION_REMOVE`,
    [`VALIDATION_UPDATE`]: `VALIDATION_UPDATE`,
    [`VALIDATION_CREATE`]: `VALIDATION_CREATE`
  }
}
