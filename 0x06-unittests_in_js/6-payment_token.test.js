/** Test suite for getPaymentTokenFromAPI, ensuring the correct behavior by
 * checking the resolved Promise content when success is true.
 * Uses the done callback to handle asynchronous testing
 */

const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with success as true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        assert.deepStrictEqual(result, { data: 'Successful response from the API' });
        done(); // Call done to signal the end of the async test
      })
      .catch((error) => {
        done(error); // Call done with error if the promise is rejected
      });
  });
});
