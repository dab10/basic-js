const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  try {
    let season = date.getMonth();
    
    if(!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0){
      throw new Error("Invalid date!");
    }

    if (season === 11 || (season >= 0 && season <= 1)) {
      return 'winter'
    } else if (season >= 2 && season <= 4) {
      return 'spring'
    } else if (season >= 5 && season <= 7) {
      return 'summer'
    } else if (season >= 8 && season <= 10) {
      return 'fall'
    }
  } catch {
    throw new Error('Invalid date!')
  }

}

module.exports = {
  getSeason
};
