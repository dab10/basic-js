const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1,   additionSeparator = '|', }) {
  let strRes = '';
  let strAddition = '';
  let arrAddition = [];
  let arrRes = [];
  
    for (let i = 0; i < additionRepeatTimes; i++) {
      arrAddition.push(`${addition}`)
    }
    strAddition = arrAddition.join(`${additionSeparator}`)

  
    for (let i = 0; i < repeatTimes; i++) {
      arrRes.push(`${str}${strAddition}`)
    }
    strRes = arrRes.join(`${separator}`)
    
    return strRes
  
}

module.exports = {
  repeater
};
