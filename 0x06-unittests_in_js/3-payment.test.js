/** This file contains a test suite for the functionality in 3-payment.js.
 * It utilizes Sinon's spy functionality to ensure that the calculateNumber
 * function from the Utils module is called with the expected arguments when
 * invoking sendPaymentRequestToApi.
 */

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should use Utils.calculateNumber with type SUM and log the result', function () {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Ensure that Utils.calculateNumber was called with the expected arguments
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the spy to its original state
    calculateNumberSpy.restore();
  });
});
