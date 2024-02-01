/** Contains test cases to validate the correctness of the upgraded
 * calculateNumber function, covering various scenarios and edge cases for
 * the SUM, SUBTRACT, and DIVIDE operations
 */

const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

// Using expect style from Chai
const expect = chai.expect;

describe('calculateNumber', function () {
  it('should return the correct sum for type SUM', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return the correct difference for type SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return the correct result for type DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" for type DIVIDE when roundedB is 0', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should return the correct sum for negative integers', function () {
    expect(calculateNumber('SUM', -5, -3)).to.equal(-8);
  });

  it('should return the correct difference for negative decimals', function () {
    expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
  });

  it('should return the correct result for type DIVIDE with negative numbers', function () {
    expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
  });

  it('should return the correct result for type DIVIDE with large numbers', function () {
    expect(calculateNumber('DIVIDE', 999999999, 888888888)).to.equal(1.125);
  });

  it('should return the correct sum for large positive integers', function () {
    expect(calculateNumber('SUM', 999999999, 888888888)).to.equal(1888888887);
  });

  it('should return the correct difference for large negative integers', function () {
    expect(calculateNumber('SUBTRACT', -999999999, -888888888)).to.equal(-111111111);
  });

  it('should return the correct result for type DIVIDE with large positive decimals', function () {
    expect(calculateNumber('DIVIDE', 1234567.89, 9876543.21)).to.equal(0.12500001265625027);
  });

  it('should return the correct result for type DIVIDE with large negative decimals', function () {
    expect(calculateNumber('DIVIDE', -1234567.89, -9876543.21)).to.equal(0.12500001265625027);
  });

  it('should return the correct sum for type SUM with zero values', function () {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });
});
