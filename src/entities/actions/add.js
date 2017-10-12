export default ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    if (!payload) { reject(new Error('Action add : payload is undefined')) }
    try {
      commit('ADD', payload)
      resolve(payload)
    }
    catch (exception) {
      reject(exception)
    }

  })
}