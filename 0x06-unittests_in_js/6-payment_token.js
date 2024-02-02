/** Implements a function getPaymentTokenFromAPI that returns a Promise
 * resolving with a successful response if the success parameter is true.
 */

function getPaymentTokenFromAPI (success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Do nothing for failure case
    }
  });
}

module.exports = getPaymentTokenFromAPI;
