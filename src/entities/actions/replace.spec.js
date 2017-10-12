/* global describe, it, before */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);

import replace from './replace';

chai.expect();
const expect = chai.expect;

const commitStub = () => { }

describe('Action: replace', () => {
  it('should return a promise', () => {
    expect(replace({ commit: commitStub }) instanceof Promise).to.equal(true)
  })

  it('should reject if there is no payload', (done) => {
    expect(replace({ commit: commitStub })).eventually.be.rejectedWith('Action replace : payload is undefined').notify(done)
  })
})