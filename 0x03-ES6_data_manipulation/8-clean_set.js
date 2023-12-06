function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || !startString || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  const cleanedString = [...filteredValues].map((value) => value.slice(startString.length)).join('-');
  return cleanedString;
}

module.exports = cleanSet;
