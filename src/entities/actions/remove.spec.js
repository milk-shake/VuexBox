/* global describe, it, before */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);

import remove from './remove';

chai.expect();
const expect = chai.expect;

const commitStub = () => { }

describe('Action: create', () => {
  it('should return a promise', () => {
    expect(remove({ commit: commitStub }) instanceof Promise).to.equal(true)
  })

  it('should reject if there is no payload', (done) => {
    expect(remove({ commit: commitStub })).eventually.be.rejectedWith('Action remove : payload is undefined').notify(done)
  })
})