/* global describe, it, before */

import chai from 'chai';
import where from './where';

chai.expect();
const expect = chai.expect;
let obj = {};

describe('Query: where', () => {
  it('should throw an error if the query object is undefined', () => {
    expect(() => {
      where()
    })
      .to.throw(Error)
  })
  it('should throw an error if the field is undefined', () => {
    expect(() => {
      where(obj)
    })
      .to.throw(Error)
  })
  it('should throw an error if the operation is undefined', () => {
    expect(() => {
      where(obj, 'title')
    })
      .to.throw(Error)
  })
  describe('=', () => {
    before(() => {
      obj = {
        1: {
          id: 1,
          title: 'first title',
          body: 'same body'
        },
        2: {
          id: 2,
          title: 'second title',
          body: 'same body'
        }
      }
    })
    it('should return the id of the object that matches', () => {
      let found = where(obj, 'title', '=', 'first title')
      expect(found.length).to.equal(1)
      expect(found[0]).to.equal(1)
    })
    it('should return ids of objects that matches', () => {
      let found = where(obj, 'body', '=', 'same body')
      expect(found.length).to.equal(2)
      expect(found[0]).to.equal(1)
      expect(found[1]).to.equal(2)
    })
    it('should return empty if nothing matches', () => {
      let found = where(obj, 'title', '=', 'this doesnt exist')
      expect(found.length).to.equal(0)
    })
  })
  describe('!=', () => {
    before(() => {
      obj = {
        1: {
          id: 1,
          title: 'first title',
          body: 'same body'
        },
        2: {
          id: 2,
          title: 'second title',
          body: 'same body'
        }
      }
    })
    it('should return results where the field doesnt match', () => {
      let found = where(obj, 'title', '!=', 'every title')
      expect(found.length).to.equal(2)
      expect(found[0]).to.equal(1)
      expect(found[1]).to.equal(2)
    })
    it('should not return results where the field matches', () => {
      let found = where(obj, 'title', '!=', 'first title')
      expect(found.length).to.equal(1)
      expect(found[0]).to.not.equal(1)
      expect(found[0]).to.equal(2)
    })
  })
  describe('<', () => {
    before(() => {
      obj = {
        1: {
          id: 1,
          title: 'first title',
          body: 'same body',
          count: 100
        },
        2: {
          id: 2,
          title: 'second title',
          body: 'same body',
          count: 10
        }
      }
    })
    it('should return results which are less than the the value', () => {
      let found = where(obj, 'count', '<', 1000)
      expect(found.length).to.equal(2)
      expect(found.indexOf(1)).to.not.equal(-1)
      expect(found.indexOf(2)).to.not.equal(-1)
    })
    it('should only return results which are less than the value', () => {
      let found = where(obj, 'count', '<', 20)
      expect(found.length).to.equal(1)
      expect(found.indexOf(2)).to.not.equal(-1)
      expect(found.indexOf(1)).to.equal(-1)
    })
  })
  describe('>', () => {
    before(() => {
      obj = {
        1: {
          id: 1,
          title: 'first title',
          body: 'same body',
          count: 100
        },
        2: {
          id: 2,
          title: 'second title',
          body: 'same body',
          count: 10
        }
      }
    })
    it('should return results which are greater than than the the value', () => {
      let found = where(obj, 'count', '>', 1)
      expect(found.length).to.equal(2)
      expect(found.indexOf(1)).to.not.equal(-1)
      expect(found.indexOf(2)).to.not.equal(-1)
    })
    it('should only return results which are greater than the value', () => {
      let found = where(obj, 'count', '>', 20)
      expect(found.length).to.equal(1)
      expect(found.indexOf(2)).to.equal(-1)
      expect(found.indexOf(1)).to.not.equal(-1)
    })
  })
  describe('contains', () => {
    before(() => {
      obj = {
        1: {
          id: 1,
          title: 'first title',
          body: 'same body',
          count: 100
        },
        2: {
          id: 2,
          title: 'second title',
          body: 'same body',
          count: 10
        }
      }
    })
    it('should return all results that contains', () => {
      let found = where(obj, 'title', 'contains', 'tit')
      expect(found.length).to.equal(2)
      expect(found.indexOf(1)).to.not.equal(-1)
      expect(found.indexOf(2)).to.not.equal(-1)
    })
    it('should return only results that contain', () => {
      let found = where(obj, 'title', 'contains', 'sec')
      expect(found.length).to.equal(1)
      expect(found.indexOf(1)).to.equal(-1)
      expect(found.indexOf(2)).to.not.equal(-1)
    })
    it('shouldnt return any results if nothing contains', () => {
      let found = where(obj, 'title', 'contains', 'this is not found')
      expect(found.length).to.equal(0)
    })
  })
  describe('!contains', () => {
    before(() => {
      obj = {
        1: {
          id: 1,
          title: 'first title',
          body: 'same body',
          count: 100
        },
        2: {
          id: 2,
          title: 'second title',
          body: 'same body',
          count: 10
        }
      }
    })
    it('should return all results that !contains', () => {
      let found = where(obj, 'title', '!contains', 'nothing has this')
      expect(found.length).to.equal(2)
      expect(found.indexOf(1)).to.not.equal(-1)
      expect(found.indexOf(2)).to.not.equal(-1)
    })
    it('should return the results that !contains', () => {
      let found = where(obj, 'title', '!contains', 'sec')
      expect(found.length).to.equal(1)
      expect(found.indexOf(2)).to.equal(-1)
      expect(found.indexOf(1)).to.not.equal(1)
    })
    it('should return no results if everything !contains', () => {
      let found = where(obj, 'title', '!contains', 'title')
      expect(found.length).to.equal(0)
    })
  })
  describe('startsWith', () => {
    before(() => {
      obj = {
        1: {
          id: 1,
          title: 'first title',
          body: 'same body',
          count: 100
        },
        2: {
          id: 2,
          title: 'second title',
          body: 'same body',
          count: 10
        }
      }
    })
    it('should return all results that start with', () => {
      let found = where(obj, 'body', 'startsWith', 'sa')
      expect(found.length).to.equal(2)
      expect(found.indexOf(1)).to.not.equal(-1)
      expect(found.indexOf(2)).to.not.equal(-2)
    })
    it('should return objects that only start with', () => {
      let found = where(obj, 'title', 'startsWith', 'firs')
      expect(found.length).to.equal(1)
      expect(found.indexOf(1)).to.not.equal(-1)
      expect(found.indexOf(2)).to.equal(-1)
    })
    it('should return nothing if nothing startsWith', () => {
      let found = where(obj, 'title', 'startsWith', 'nothing')
      expect(found.length).to.equal(0)
    })
  })
})
