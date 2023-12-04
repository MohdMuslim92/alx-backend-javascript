function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  const cleanedString = filteredValues.map((value) => value.slice(startString.length)).join('-');
  return cleanedString;
}

module.exports = cleanSet;
