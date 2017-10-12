/* global describe, it, before */

import chai from 'chai';
import remove from './remove';

let state = {}

chai.expect();
const expect = chai.expect;

describe('Mutation: remove', () => {
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
    let newState = remove(state, 1)
    expect(newState.all).to.not.have.property(1)
  })

  it('should throw error if payload is not passed', () => {
    expect(() => {
      remove(state)
    })
      .to.throw(Error)
  })

  it('should throw an error if the entity doesnt exist', () => {
    expect(() => {
      remove(state, 2)
    })
      .to.throw(Error)
  })

  it('should return a new object', () => {
    let newState = remove(state, 1)
    expect(newState).to.not.equal(state)
  })
})