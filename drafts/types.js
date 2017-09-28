/**
 * Types
 * generates the types for the draft system
 *
 * DRAFT_ADD: Adds a draft object to the draft state
 * DRAFT_CREATE: Adds a new draft object to the draft state
 * DRAFT_REMOVE: discards a draft object
 * DRAFT_UPDATE: updates a draft object
 */
export default () => {
  return {
    [`DRAFT_ADD`]: `DRAFT_ADD`,
    [`DRAFT_CREATE`]: `DRAFT_CREATE`,
    [`DRAFT_REMOVE`]: `DRAFT_REMOVE`,
    [`DRAFT_UPDATE`]: `DRAFT_UPDATE`
  }
}
