const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str + "";
  if (options === undefined) {
    return str;
  }

  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (repeatTimes === undefined || !Number.isInteger(repeatTimes)) {
    repeatTimes = 1;
  }

  if (separator === undefined) {
    separator = "+";
  }

  if (addition === undefined) {
    addition = "";
  } else {
    addition = addition;
  }

  if (
    additionRepeatTimes === undefined ||
    !Number.isInteger(additionRepeatTimes)
  ) {
    additionRepeatTimes = 1;
  }

  if (additionSeparator === undefined) {
    additionSeparator = "|";
  }

  function repeat(str, count, separator) {
    return str + (separator + str).repeat(count - 1);
  }

  return repeat(
    str + repeat(addition, additionRepeatTimes, additionSeparator),
    repeatTimes,
    separator
  );
};
