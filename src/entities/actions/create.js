export default ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    if (!payload) { reject(new Error('Action create : payload is undefined')) }
    try {
      commit('CREATE', payload)
      resolve(payload)
    }
    catch (exception) {
      reject(exception)
    }
  })
}