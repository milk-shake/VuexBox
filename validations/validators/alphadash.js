export default (value, length) => {
  const numeric = /\d/
  const regex = /^[A-z-]+$/

  if (typeof value !== 'string') {
    return false
  }

  return !numeric.test(value) && regex.test(value)
}
