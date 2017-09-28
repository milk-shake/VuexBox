export default (value, params) => {
  console.log('val', value)
  return (typeof value === 'string' || value instanceof String)
}
