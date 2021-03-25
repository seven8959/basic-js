const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.filter(el => typeof el === 'string')
          .map(e => e.trim().slice(0, 1).toUpperCase()).sort().join('');
    } else {
      return false;
    }
};
