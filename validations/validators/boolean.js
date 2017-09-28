export default (value, params) => {
  if (typeof value === 'string') {
    return (value === '1' || value.toLowerCase() === 'on' || value.toLowerCase() === 'true' || value === '0' || value.toLowerCase() === 'off' || value.toLowerCase() === 'false')
  }

  if (typeof value === 'number') {
    return (value === 1 || value === 0)
  }

  if (typeof value === 'boolean') {
    return true
  }
}
