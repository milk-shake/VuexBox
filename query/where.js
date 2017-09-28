/**
 * Where
 * filters an object on a field, operator and value
 * @param {object} obj the object to filter
 * @param {field} field the field to filter on
 * @param {operator} op the operator to use e.g '=', '!='
 * @param {value} val the value to filter with
 */
export default (obj, field, op, val) => {
  const keys = Object.keys(obj)
  let ret = keys.map(key => {
    const testObj = obj[key]
    let ret = false

    switch (op) {
      case '=': {
        ret = (testObj[field] === val)
        break
      }
      case '!=': {
        ret = (testObj[field] !== val)
        break
      }
      case '<': {
        ret = (testObj[field] < val)
        break
      }
      case '>': {
        ret = (testObj[field] > val)
        break
      }
      case 'contains': {
        ret = (String(testObj[field]).toLowerCase().search(val.toLowerCase())) !== -1
        break
      }
      case '!contains': {
        ret = !(String(testObj[field]).toLowerCase().search(val.toLowerCase()))
        break
      }
      case 'startsWith': {
        ret = (String(testObj[field]).toLowerCase().startsWith(val.toLowerCase()))
        break
      }
    }
    return (ret) ? Number(key) : null
  })

  return ret.filter(item => !!item)
}
