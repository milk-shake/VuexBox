export default (value, length) => {
  if (Array.isArray(value)) {
    return value.length >= length
  }

  if (typeof value === 'string') {
    return value.length <= length
  }

  if (typeof value === 'number') {
    return value <= length
  }

  if (typeof value === 'object') {
    return Object.keys(value).length <= length
  }
}
