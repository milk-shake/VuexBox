/* global describe, it, before */

import chai from 'chai';
import replace from './replace';

let state = {}

chai.expect();
const expect = chai.expect;

describe('Mutation: replace', () => {
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

  it('should remove an item from the all state', () => {
    let newState = replace(state, { id: 1, title: 'new test' })
    expect(newState.all[1]).to.have.property('title')
    expect(newState.all[1].title).to.equal('new test')
  })

  it('should throw an error if state does not have all propery', () => {
    expect(() => {
      replace({}, { id: 1, title: 'error' })
    })
      .to.throw(Error)
  })

  it('should throw an error if payload does not have an id', () => {
    expect(() => {
      replace(state, { title: 'error' })
    })
      .to.throw(Error)
  })

  it('should return a new object', () => {
    let newState = replace(state, { id: 1, title: 'new state' })
    expect(newState).to.not.equal(state)
  })
})