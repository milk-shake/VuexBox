export default ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    if (!payload) { reject(new Error('Action update : payload is undefined')) }
    try {
      commit(types[`UPDATE`], payload)
      resolve(payload)
    }
    catch (exception) {
      reject(exception)
    }
  })
}