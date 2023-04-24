/**
 * Capitalise every word of a string
 * @param {string} str
 */
export function capitalizeWords(str) {
  return str.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
  });
}

export function toCamelCase(str) {
  return str.replace(/[-_\s]+([a-zA-Z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}

export function fromCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}