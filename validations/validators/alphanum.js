export default (value, length) => {
  const regex = /^[A-z0-9]+$/

  if (typeof value !== 'string') {
    return false
  }

  return regex.test(value)
}
