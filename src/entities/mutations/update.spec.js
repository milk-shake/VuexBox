/* global describe, it, before */

import chai from 'chai';
import update from './update';

let state = {}

chai.expect();
const expect = chai.expect;

describe('Mutation: update', () => {
  beforeEach(() => {
    state = {
      all: {
        1: {
          id: 1,
          title: 'test'
        }
      }
    }
  })

  it('should update an entity', () => {
    let newState = update(state, { id: 1, field: 'title', value: 'new test' })
    expect(newState.all[1]).to.have.property('title')
    expect(newState.all[1].title).to.equal('new test')
  })

  it('should throw an error if the payload does not have an id', () => {
    expect(() => {
      update(state, { field: 'title', value: 'new test' })
    })
      .to.throw(Error)
  })

  it('should throw an error if the payload does not have a field', () => {
    expect(() => {
      update(state, { id: 1, value: 'new test' })
    })
      .to.throw(Error)
  })

  it('should throw an error if the payload does not have a value', () => {
    expect(() => {
      update(state, { id: 1, field: 'title' })
    })
      .to.throw(Error)
  })

  it('should throw an error if the state does not have an all property', () => {
    expect(() => {
      update({}, { id: 1, field: 'title', value: 'title' })
    })
      .to.throw(Error)
  })

  it('should throw an error if the state does not have the entity by id', () => {
    expect(() => {
      update(state, { id: 2, field: 'title', value: 'title' })
    })
      .to.throw(Error)
  })

  it('should return a new object', () => {
    let newState = update(state, { id: 1, field: 'title', value: 'title' })
    expect(newState).to.not.equal(state)
  })
})