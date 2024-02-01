/** Upgrades the calculateNumber function from the file ./0-calcul.js by adding
 * a new argument type (SUM, SUBTRACT, or DIVIDE) and implements corresponding
 * operations based on the type
 */

function calculateNumber (type, a, b) {
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

module.exports = calculateNumber;
