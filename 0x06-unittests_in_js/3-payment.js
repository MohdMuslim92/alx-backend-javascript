/** This file defines a module with a function named sendPaymentRequestToApi.
 * The function takes two arguments, totalAmount and totalShipping, and
 * internally uses the calculateNumber function from the Utils module to
 * perform a sum.
 * The result is then displayed in the console as a payment request to an API.
 */
const Utils = require('./utils');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
  const sumResult = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sumResult}`);
}

module.exports = sendPaymentRequestToApi;
