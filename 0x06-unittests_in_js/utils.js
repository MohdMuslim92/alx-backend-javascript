/** This file defines a module named Utils containing a property calculateNumber
 * The calculateNumber function performs mathematical operations such as
 * addition, subtraction, and division on two given numbers.
 */

const Utils = {
  calculateNumber: function (type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      default:
        throw new Error('Invalid operation type');
    }
  }
};

module.exports = Utils;
