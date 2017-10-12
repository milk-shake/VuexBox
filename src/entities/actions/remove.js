export default ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    if (!payload) { reject(new Error('Action remove : payload is undefined')) }
    try {
      commit('REMOVE', payload)
      resolve(payload)
    }
    catch (exception) {
      reject(exception)
    }
  })
}