/* global describe, it, before */

import chai from 'chai';
import add from './add';

let state = {}

chai.expect();
const expect = chai.expect;

describe('Mutation: add', () => {
  beforeEach(() => {
    state = {
      all: {}
    }
  })

  it('should add an entity to the all state', () => {
    let newState = add(state, { id: 1, title: 'test' })
    expect(newState.all).to.have.property(1)
    expect(newState.all[1]).to.have.property('id')
    expect(newState.all[1].id).to.equal(1)
    expect(newState.all[1]).to.have.property('title')
    expect(newState.all[1].title).to.equal('test')
  })

  it('should add an entity to the all state via its id', () => {
    let id = 100
    let newState = add(state, { id: id })
    expect(newState.all).to.have.property(id)
  })

  it('should throw an error if the state does not have an all state', () => {
    expect(() => {
      add({}, { id: 1 })
    })
      .to.throw(Error)
  })

  it('should throw an error if the payload does not contain an id field', () => {
    expect(() => {
      add(state, { title: 'title' })
    })
      .to.throw(Error)
  })

  it('should return a new object', () => {
    let newState = add(state, { id: 1, title: 'new state' })
    expect(newState).to.not.equal(state)
  })
})