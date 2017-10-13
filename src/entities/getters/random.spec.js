/* global describe, it, before */

import chai from 'chai';
import random from './random';

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

describe('Getters: random', () => {
  it('should return a random object from the state', () => {
    let getterState = random(state)()
    expect(getterState).to.not.equal(undefined)
  })
})
