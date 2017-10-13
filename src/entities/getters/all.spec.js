/* global describe, it, before */

import chai from 'chai';
import all from './all';

chai.expect();
const expect = chai.expect;

let state = {
  all: {
    1: {
      id: 1,
      title: 'test'
    }
  }
}

describe('Getters: all', () => {
  it('should return the all state', () => {
    let getterState = all(state)
    expect(getterState).to.have.property(1)
    expect(getterState[1]).to.have.property('title')
    expect(getterState[1].title).to.equal('test')
  })

  it('should throw an error if the state does not have an all property', () => {
    expect(() => {
      all({})
    })
      .to.throw(Error)
  })
})
