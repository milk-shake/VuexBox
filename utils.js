/**
 * isInt
 * determines if a given value is an integer
 * @param {any} value the value to test
 */
export const isInt = (value) => {
  if (isNaN(value)) {
    return false
  }

  const x = parseFloat(value)
  return (x | 0) === x
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
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * capitalizeFirstLetter
 * capitalises the first letter of a string
 * @param {string} word the word to capitalize
 */
export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

/**
* parseFormData
* creates a new namespaced form data object for POSTing multipart formdata via XHR. Recursively calls itself.
* @param Object object the data to append to the form data object
* @param FormData the form data object passed to append to
* @param String namespace the current namespace for the form data, used for recursive calls so that the data is correctly namespaced
* @returns FormData the appended formdata
**/
export const parseFormData = function (object, formData, namespace) {
  let fd = formData || new window.FormData()
  let formKey
  for (let property in object) {
    if (namespace) {
      formKey = namespace + '[' + property + ']'
    } else {
      formKey = property
    }
    if (typeof object[property] === 'object' && !(object[property] instanceof window.File)) {
      parseFormData(object[property], fd, formKey)
    } else {
      fd.append(formKey, object[property])
    }
  }
  return fd
}
