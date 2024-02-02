/** Test suite employing Sinon to stub calculateNumber for efficiency and spy
 * on console.log to validate correct logging in the payment processing module.
 */

const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function () {
    // Create a stub for Utils.calculateNumber
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and the spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should stub calculateNumber and log the correct message', function () {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub is being called with the expected arguments
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));

    // Verify that console.log is logging the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 10'));
  });
});
