/* global describe, it, before */

import chai from 'chai';
import where from './where';

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

describe('Getters: where', () => {
  it('should return an object where the field matches the value', () => {
    let found = where(state)('title', '=', 'test')

    expect(found).to.have.property(1)
    expect(found[1]).to.not.equal(undefined)
    expect(found[1]).to.have.property('id')
    expect(found[1].id).to.equal(1)
    expect(found[1]).to.have.property('title')
    expect(found[1].title).to.equal('test')
  })
  it('should return an empty object when the field doesnt match', () => {
    let found = where(state)('title', '=', 'this doesnt exist')
    expect(Object.keys(found).length).to.equal(0)
  })
  it('should throw an error if state.all doesnt exist', () => {
    expect(() => {
      where({})('title', '=', 'error')
    })
      .to.throw(Error)
  })
})
