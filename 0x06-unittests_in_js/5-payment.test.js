/** Test suite for the sendPaymentRequestToApi function, utilizing Sinon for
 * a single spy on console.log to verify correct logging and call count in
 * different scenarios.
 */

const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    // Create a spy for console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message and be called once with 100 and 20', function () {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log is logging the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('should log the correct message and be called once with 10 and 10', function () {
    // Call the function under test
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log is logging the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
