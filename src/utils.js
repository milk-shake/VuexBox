/**
 * GetRandomKey
 * returns a random entity from the object
 * @param {object} obj the object to get a random object from
 */
export const getRandomKey = (obj) => {
  if (obj) {
    let keys = Object.keys(obj)
    let length = keys.length
    let randomIndex = generateRandomNumber(0, length - 1)
    return obj[keys[randomIndex]]
  }

  return null
}

/**
 * GenerateRandomNumber
 * generates a random number between min and max
 * @param {number} min the minimum limit
 * @param {number} max the maximum limit
 */
export const generateRandomNumber = (min = 0, max = 100) => {
  if (min > max) { throw new Error('GenerateRandomNumber : min is larger than max') }
  return Math.floor(Math.random() * (max - min + 1)) + min
}


/**
 * Pluck
 * plucks objects out of the object using id
 * @param {object} obj the object to pluck
 * @param {array} ids an array of ids to pluck out
 */
export const pluck = (obj, ids) => {
  let ret = {}
  Object.keys(obj).forEach((item) => {
    if (ids.indexOf(Number(item)) > -1) {
      ret[item] = obj[Number(item)]
    }
  })

  return ret
}