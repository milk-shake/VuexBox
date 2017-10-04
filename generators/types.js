/**
 * Types
 * generates the custom CRUD actions for every store created
 * with the helper
 *
 * HYDRATE: Replaces the state.all object with new data
 * ADD: Adds a entity to the state.all object via id as key
 * REMOVE: deletes an entity via key from the store.all
 * UPDATE: updates an entity via id key from store.all
 * CREATE: creates a new entity
 * REPLACE: replaces an entity with new data
 */
export default () => {
  return {
    [`HYDRATE`]: `HYDRATE`,
    [`ADD`]: `ADD`,
    [`REMOVE`]: `REMOVE`,
    [`UPDATE`]: `UPDATE`,
    [`CREATE`]: `CREATE`,
    [`REPLACE`]: `REPLACE`
  }
}
