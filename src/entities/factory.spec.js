/* global describe, it, before */

import chai from 'chai';
import Factory from './factory';

chai.expect();
const expect = chai.expect;

let repository;

describe('Store: Factory', () => {
  describe('Store.create', () => {
    expect(Factory.create).to.be.a('function')
  })
})
