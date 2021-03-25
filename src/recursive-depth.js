const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {    
      let depthArr = 1;
      arr.forEach((e) => {
        let currentDepthArr = 1;
        if (Array.isArray(e)) {
          currentDepthArr += this.calculateDepth(e);
        }
        if (depthArr < currentDepthArr) {
          depthArr = currentDepthArr;
        }
      });
      return depthArr;
    };
};