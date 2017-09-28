export default (value, params) => {
  const regex = new RegExp(params)
  return regex.test(value)
}
