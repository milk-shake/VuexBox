/* global describe, it, before */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);

import update from './update';

chai.expect();
const expect = chai.expect;

const commitStub = () => { }

describe('Action: update', () => {
  it('should return a promise', () => {
    expect(update({ commit: commitStub }) instanceof Promise).to.equal(true)
  })

  it('should reject if there is no payload', (done) => {
    expect(update({ commit: commitStub })).eventually.be.rejectedWith('Action update : payload is undefined').notify(done)
  })
})