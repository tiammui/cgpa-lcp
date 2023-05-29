import { useStore } from './stateStore';

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

/**
 * Use to determine the index of an object in the `array` that the `property` value
 * is equal to the `searchTerm`
 * @param {[]} array The object array to be searched
 * @param {string} property The object property to be searched
 * @param {any} searchTerm The value to be looked for
 * @returns {number} The index of the object in the `array`.
 */
export function indexOfObject(array, property, searchTerm){
  for(var i=0,len=array.length;i<len;i++){
    if(array[i][property]===searchTerm)return i;
  }
  return -1;
}


export function toCamelCase(str) {
  return str.replace(/[-_\s]+([a-zA-Z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}
export function searchCourse(department, deptCodeUnitEntries) {
  const index = deptCodeUnitEntries.indexOf(department);
  if (index !== -1) {
    return {
      code: deptCodeUnitEntries[index + 1],
      units: deptCodeUnitEntries[index + 2],
    };
  }
  return null;
}

