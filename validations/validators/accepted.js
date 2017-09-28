export default (value, params) => {
  if (typeof value === 'string') {
    return (value === '1' || value.toLowerCase() === 'on' || value.toLowerCase() === 'true')
  }

  if (typeof value === 'number') {
    return value === 1
  }

  if (typeof value === 'boolean') {
    return value
  }
}
