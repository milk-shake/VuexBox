export default (value, params) => {
  return (typeof value === 'string' || value instanceof String)
}
