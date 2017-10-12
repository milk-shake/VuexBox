export default ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    if (!payload) { reject(new Error('Action replace : payload is undefined')) }
    try {
      commit(types[`REPLACE`], payload)
      resolve(payload)
    }
    catch (exception) {
      reject(exception)
    }
  })
}