const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixCopy = matrix.map(function (item) {return [...item]});


  let res = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let x = - 1; x < 2; x++) {
        for (let y = - 1; y < 2; y++) {
          if ((x === 0) && (y === 0)) {
            continue 
          } else {
        
          if (matrix[i+x] == undefined || matrix[i+x][j+y] == undefined || matrix[j+y] == undefined) {
            continue         
          }
            res = res + (+matrix[i+x][j+y])
          }
        }

    }
    matrixCopy[i][j] = res;
    res = 0;
  }
}
  return matrixCopy;
}

module.exports = {
  minesweeper
};
