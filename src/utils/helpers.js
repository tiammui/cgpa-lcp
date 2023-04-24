/**
 * Capitalise first letter of a word
 * @param {string} word
 */
export function capFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function toCamelCase(str) {
  return str.replace(/[-_\s]+([a-zA-Z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}

export function fromCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}