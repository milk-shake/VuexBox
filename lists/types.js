/**
 * List Types
 * generates the list manipulation types that are used
 * throughout the generator
 *
 * HYDRATE: Replaces a list with new data
 * ADD: Adds a entity to the list
 * ADD_AT_INDEX: adds an entity to the list at the index
 * REMOVE: deletes an entity from the list
 * REMOVE_AT_INDEX: deletes and entity via index from the list
 * EMPTY: empties a list of entries
 */
export default (listName) => {
  const name = listName.toUpperCase()

  return {
    [`${name}_HYDRATE`]: `${name}_HYDRATE`,
    [`${name}_ADD`]: `${name}_ADD`,
    [`${name}_ADD_AT_INDEX`]: `${name}_ADD_AT_INDEX`,
    [`${name}_REMOVE`]: `${name}_REMOVE`,
    [`${name}_REMOVE_AT_INDEX`]: `${name}_REMOVE_AT_INDEX`,
    [`${name}_SWAP_INDICES`]: `${name}_SWAP_INDICES`,
    [`${name}_EMPTY`]: `${name}_EMPTY`
  }
}
