/* global describe, it, before */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);

import add from './add';

chai.expect();
const expect = chai.expect;

const commitStub = () => { }

describe('Action: add', () => {
  it('should return a promise', () => {
    expect(add({ commit: commitStub }) instanceof Promise).to.equal(true)
  })

  it('should reject if there is no payload', (done) => {
    expect(add({ commit: commitStub })).eventually.be.rejectedWith('Action add : payload is undefined').notify(done)
  })
})