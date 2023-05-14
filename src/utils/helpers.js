export function averageScore(numsArr) {
  return numsArr.reduce((a, b) => +a + +b) / numsArr.length;
}

/**
 * Capitalise every word of a string
 * @param {string} str
 */
export function capitalizeWords(str) {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

export function fromCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

export function toCamelCase(str) {
  return str.replace(/[-_\s]+([a-zA-Z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}
export function searchCourse(department, deptCodeUnitEntries) {
  const index = deptCodeUnitEntries.indexOf(department);
  if (index !== -1) {
    return { code: deptCodeUnitEntries[index+1], units: deptCodeUnitEntries[index+2] };
  }
  return null;
}


