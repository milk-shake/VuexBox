/* global describe, it, before */

import chai from 'chai';
import Factory from './factory'
chai.expect();
const expect = chai.expect;
let obj;

describe('Factory', () => {
  describe('Create', () => {
    it('should throw an error if name is not passed', () => {
      expect(() => {
        Factory.CreateStore()
      })
        .to.throw(Error)
    })
    it('should throw an error if name is not a string', () => {
      expect(() => {
        Factory.CreateStore([])
      })
    })
  })
})