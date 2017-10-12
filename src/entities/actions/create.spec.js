/* global describe, it, before */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);

import create from './create';

chai.expect();
const expect = chai.expect;

const commitStub = () => { }

describe('Action: create', () => {
  it('should return a promise', () => {
    expect(create({ commit: commitStub }) instanceof Promise).to.equal(true)
  })

  it('should reject if there is no payload', (done) => {
    expect(create({ commit: commitStub })).eventually.be.rejectedWith('Action create : payload is undefined').notify(done)
  })
})