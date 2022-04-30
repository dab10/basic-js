const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  
  calculateDepth(arr) {
    
    let arr1 = [arr]; 

        if(arr1.filter(i => i.constructor.name === "Array").length != 0){
           res = 1 + this.calculateDepth([].concat(...arr1.filter(i => i.constructor.name === "Array")))
            return res;
         } else {
           return 1;
        } 
      }
 
    }
  



module.exports = {
  DepthCalculator
};
