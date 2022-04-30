const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let arrLocal = [];
  let discardNext = false;
  let discardPrev = false;
 
  try {
    arrLocal = arr.slice();

    for (let i = 0; i < arrLocal.length; i++) {
      if (arrLocal[i] === '--discard-next' && arrLocal[i + 1] !== undefined) {
        arrLocal.splice(i, 2)
        discardNext = true;
      } else if (arrLocal[i] === '--discard-next' && arrLocal[i + 1] === undefined) {
        arrLocal.splice(i, 1)
      } else {
        continue
      }
    }

    for (let i = 0; i < arrLocal.length; i++) {
      if (arrLocal[i] === '--double-next' && arrLocal[i + 1] !== undefined) {
        arrLocal.splice(i, 1, arrLocal[i + 1])
      } else if (arrLocal[i] === '--double-next' && arrLocal[i + 1] === undefined) {
        arrLocal.splice(i, 1)
      } else {
        continue
      }
    }

    for (let i = 0; i < arrLocal.length; i++) {
      if (arrLocal[i] === '--discard-prev' && arrLocal[i - 1] !== undefined && discardNext === false) {
        arrLocal.splice(i - 1, 2)
        discardPrev = true
      } else if ((arrLocal[i] === '--discard-prev' && arrLocal[i - 1] === undefined) || (arrLocal[i] === '--discard-prev' && discardNext === true)) {
        arrLocal.splice(i, 1)
      } else {
        continue
      }
    }

    for (let i = 0; i < arrLocal.length; i++) {
      if (arrLocal[i] === '--double-prev' && arrLocal[i - 1] !== undefined && discardNext === false) {
        arrLocal.splice(i, 1, arrLocal[i - 1])
      } else if ((arrLocal[i] === '--double-prev' && arrLocal[i - 1] === undefined) || (arrLocal[i] === '--double-prev' && discardNext === true)) {
        arrLocal.splice(i, 1)
      } else {
        continue
      }
    }

    return arrLocal
  } catch {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
}

module.exports = {
  transform
};
