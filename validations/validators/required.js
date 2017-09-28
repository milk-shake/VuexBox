/*
 copied from: https://github.com/monterail/vuelidate/blob/master/src/validators/common.js
*/
export default (value, params) => {
  if (Array.isArray(value)) return !!value.length
  if (value === undefined || value === null || value === false) {
    return false
  }

  if (value instanceof Date) {
    // invalid date won't pass
    return !isNaN(value.getTime())
  }

  if (typeof value === 'object') {
    for (let _ in value) return true
    return false
  }

  return !!String(value).length
}
