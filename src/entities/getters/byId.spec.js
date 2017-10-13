/* global describe, it, before */

import chai from 'chai';
import byId from './byId';

chai.expect();
const expect = chai.expect;

let state = {
  all: {
    1: {
      id: 1,
      title: 'test'
    },
    2: {
      id: 2,
      title: 'title 2'
    }
  }
}

describe('Getters: byId', () => {
  it('should return an object by id', () => {
    let getterState = byId(state)(1)

    expect(getterState).to.have.property('id')
    expect(getterState.id).to.equal(1)
    expect(getterState).to.have.property('title')
    expect(getterState.title).to.equal('test')
  })

  it('should throw an error if the state does not have an all property', () => {
    expect(() => {
      get({})
    })
      .to.throw(Error)
  })

  it('should return undefined if state does not have the entity', () => {
    let getterState = byId(state)(100)
    expect(getterState).to.equal(undefined)
  })
})
