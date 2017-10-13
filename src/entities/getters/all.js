export default (state) => {
  if (state.all === undefined) { throw new Error('Getter all : state does not have all') }
  return state.all
}