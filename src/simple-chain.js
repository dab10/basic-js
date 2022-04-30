const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  str: [],

  getLength() {
    
    return this.str.length;
  },

  addLink(value = '') {
    this.str.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    let i = position - 1;
    if (!Number.isInteger(i) || i < 0 || i >= this.str.length) {
      this.str = []
      throw new Error('You can\'t remove incorrect link!')
    }

    this.str.splice(i, 1)
    return this
  },

  reverseChain() {
    this.str.reverse();
    return this;
  },

  finishChain() {
    let res = this.str.join('~~')
    this.str = []
    return res
  },
};

module.exports = {
  chainMaker
};
