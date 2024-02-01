/** Contains test cases to validate the correctness of the calculateNumber
 * function, covering various scenarios and edge cases
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return the correct sum for integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the correct sum for one decimal', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the correct sum for two decimals', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the correct sum for one and a half decimals', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return the correct sum for negative integers', function () {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });

  it('should return the correct sum for negative decimals', function () {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should return the correct sum for zero and positive decimal', function () {
    assert.strictEqual(calculateNumber(0, 3.7), 4);
  });

  it('should return the correct sum for zero and negative decimal', function () {
    assert.strictEqual(calculateNumber(0, -3.7), -4);
  });

  it('should return the correct sum for zero and positive integer', function () {
    assert.strictEqual(calculateNumber(0, 3), 3);
  });

  it('should return the correct sum for zero and negative integer', function () {
    assert.strictEqual(calculateNumber(0, -3), -3);
  });

  it('should return the correct sum for zero and zero', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return the correct sum for large positive integers', function () {
    assert.strictEqual(calculateNumber(999999999, 888888888), 1888888887);
  });

  it('should return the correct sum for large negative integers', function () {
    assert.strictEqual(calculateNumber(-999999999, -888888888), -1888888887);
  });

  it('should return the correct sum for large positive decimals', function () {
    assert.strictEqual(calculateNumber(1234567.89, 9876543.21), 11111111);
  });

  it('should return the correct sum for large negative decimals', function () {
    assert.strictEqual(calculateNumber(-1234567.89, -9876543.21), -11111111);
  });
});
