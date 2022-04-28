const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let target = '@'
  let pos = -1;
  let position = 0;

  while ((pos = email.indexOf(target, pos + 1)) != -1) {
    position = pos;
  }

  return email.slice(position + 1)
}

module.exports = {
  getEmailDomain
};
