import * as Validators from './validators'

export const ValidateSchema = (validationState, data) => {
  let clone = Object.assign({}, validationState)
  let errors = []
  for (const field in clone) {
    if (field === 'errors' || field === 'dirty' || field === 'id') { continue }
    let fieldErrors = []
    for (const validator in clone[field].validators) {
      let validatorSplit = validator.split(':')
      let validatorName = validatorSplit[0]
      let validatorParams = validatorSplit.length === 2 ? validatorSplit[1] : null
      let result = Validators[validatorName](data[field], validatorParams)

      if (!result) {
        errors.push(true)
        fieldErrors.push(true)
        clone[field].error = true
        clone[field].validators[validator] = true
      }

      if (result) {
        clone[field].error = false
        clone[field].validators[validator] = false
      }
    }
    clone[field].error = !!fieldErrors.length
  }

  clone.errors = !!errors.length

  return clone
}
