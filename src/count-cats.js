const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  let searchEl = '^^';
  matrix.forEach(el => {
    el.forEach(element => {
      if(element && element === searchEl) {
        count++;
      };
    });
  });
  return count;
};

