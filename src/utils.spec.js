/* global describe, it, before */

import chai from 'chai';
import { getRandomKey, generateRandomNumber, pluck } from './utils';

chai.expect();
const expect = chai.expect;
let obj;

describe('Utils: generateRandomNumber', () => {
  it('should return a number between one and one hundred if no parameters are passed', () => {
    let tries = 100;
    for (let i = 0; i < 100; i++) {
      let number = generateRandomNumber()
      expect(number).to.be.above(-1).and.to.be.below(101)
    }
  })
  it('should return a number that is between two numbers if passed', () => {
    let tries = 100;
    for (let i = 0; i < 100; i++) {
      let number1 = generateRandomNumber()
      let number2 = generateRandomNumber()

      let min = (number1 < number2) ? number1 : number2
      let max = (number1 > number2) ? number1 : number2

      let generated = generateRandomNumber(min, max)
      expect(generated).to.be.above(min - 1).and.to.be.below(max + 1)
    }
  })
  it('should throw an error if min is more than max', () => {
    let min = 100
    let max = 1

    expect(() => {
      generateRandomNumber(min, max)
    })
      .to.throw(Error)
  })
})

describe('Utils: getRandomKey', () => {
  it('should return a random key from an object', () => {
    let keys = 1000
    let tries = 100

    let obj = {}
    for (let i = 0; i < keys; i++) {
      obj[`key-${i}`] = `result-${i}`
    }

    for (let i = 0; i < tries; i++) {
      let random = getRandomKey(obj)
      chai.expect(random).to.not.equal(undefined)
    }
  })
})

describe('Utils: pluck', () => {
  before(() => {
    let keys = 1000
    obj = {}
    for (let i = 0; i < keys; i++) {
      obj[i] = {
        id: i,
        title: `title-${i}`
      }
    }
  })
  it('should return objects that match the ids passed', () => {
    let plucked = pluck(obj, [1, 2, 3])
    expect(Object.keys(plucked).length).to.equal(3)
  })

  it('should return an empty object if none match', () => {
    let plucked = pluck(obj, [1001, 1002, 1003])
    expect(Object.keys(plucked).length).to.equal(0)
  })
})