/* global describe, it, before */

import chai from 'chai';
import create from './create';

let state = {}

chai.expect();
const expect = chai.expect;

describe('Mutation: create', () => {
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

  it('should create a new entity on the all state', () => {
    let newState = create(state, { id: 2, title: 'test 2' })

    expect(newState.all).to.have.property(1)
    expect(newState.all[1]).to.have.property('id')
    expect(newState.all[1].id).to.equal(1)
    expect(newState.all[1]).to.have.property('title')
    expect(newState.all[1].title).to.equal('test')

    expect(newState.all).to.have.property(2)
    expect(newState.all[2]).to.have.property('id')
    expect(newState.all[2].id).to.equal(2)
    expect(newState.all[2]).to.have.property('title')
    expect(newState.all[2].title).to.equal('test 2')
  })

  it('should add an entity to the all state via its id', () => {
    let id = 100
    let newState = create(state, { id: id })
    expect(newState.all).to.have.property(id)
  })

  it('should throw an error if the state does not have an all state', () => {
    expect(() => {
      create({}, { id: 1 })
    })
      .to.throw(Error)
  })

  it('should throw an error if the payload does not contain an id field', () => {
    expect(() => {
      create(state, { title: 'title' })
    })
      .to.throw(Error)
  })

  it('should return a new object', () => {
    let newState = create(state, { id: 1, title: 'new state' })
    expect(newState).to.not.equal(state)
  })
})