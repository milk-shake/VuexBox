import * as Validators from './validators'

/**
 * ValidateSchema
 * @param { Object }  validationState the current state of the validation for this entity
 * @param { Object }  data            the updated data for this entity to validate
 * @param { Boolean } create          whether the dirty boolean should be set to true. If create is true, its a new resource so its not dirty.
 */
export const ValidateSchema = (validationState, data, create) => {
  let errors = []
  for (const field in data) {
    // if the field is id (should be immutable) or isnt in the validation schema (dont validate) then skip
    if (field === 'id' || !validationState[field]) { continue }
    let fieldErrors = []

    // for each validation type for this field e.g [required, numeric]
    for (const validator in validationState[field].errors) {
      // the validator params are passed as a string with a colon so split it here
      let validatorSplit = validator.split(':')
      let validatorName = validatorSplit[0]
      let validatorParams = validatorSplit.length === 2 ? validatorSplit[1] : null
      let result = Validators[validatorName](data[field], validatorParams)

      validationState[field].error = false
      validationState[field].errors[validator] = false

      if (!result) {
        errors.push(true)
        fieldErrors.push(true)
        validationState[field].error = true
        validationState[field].errors[validator] = true
      }
    }

    if (!create) {
      validationState[field].dirty = true
    }

    validationState[field].error = !!fieldErrors.length
    validationState[field].invalid = validationState[field].dirty && validationState[field].error
  }

  validationState.errors = !!errors.length

  return validationState
}
