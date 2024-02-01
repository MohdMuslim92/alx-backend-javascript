/** Contains test cases to validate the correctness of the upgraded
 * calculateNumber function, covering various scenarios and edge cases for
 * the SUM, SUBTRACT, and DIVIDE operations
 */

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('should return the correct sum for type SUM', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return the correct difference for type SUBTRACT', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return the correct result for type DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" for type DIVIDE when roundedB is 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should return the correct sum for negative integers', function () {
    assert.strictEqual(calculateNumber('SUM', -5, -3), -8);
  });

  it('should return the correct difference for negative decimals', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
  });

  it('should return the correct result for type DIVIDE with negative numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
  });

  it('should return the correct result for type DIVIDE with large numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 999999999, 888888888), 1.125);
  });

  it('should return the correct sum for large positive integers', function () {
    assert.strictEqual(calculateNumber('SUM', 999999999, 888888888), 1888888887);
  });

  it('should return the correct difference for large negative integers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -999999999, -888888888), -111111111);
  });

  it('should return the correct result for type DIVIDE with large positive decimals', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1234567.89, 9876543.21), 0.12500001265625027);
  });

  it('should return the correct result for type DIVIDE with large negative decimals', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -1234567.89, -9876543.21), 0.12500001265625027);
  });

  it('should return the correct sum for type SUM with zero values', function () {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
  });
});
