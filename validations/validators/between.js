export default (value, params) => {
  let values = params.split(',')
  const min = values[0]
  const max = values[1]

  if (Array.isArray(value)) {
    return min <= value.length && value.length <= max
  }

  if (typeof value === 'string') {
    return min <= value.length && value.length <= max
  }

  if (typeof value === 'number') {
    return min <= value.length && value.length <= max
  }

  if (typeof value === 'object') {
    return min <= Object.keys(value).length && value.length <= max
  }
}
