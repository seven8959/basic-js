const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined || null) {
    return "Unable to determine the time of year!";
  }
  date.getTimezoneOffset();
  let month = date.getMonth();
  switch (month) {
    case 0:
    case 1:
    case 11:
      return "winter";
      break;
    case 2:
    case 3:
    case 4:
      return "spring";
      break;
    case 5:
    case 6:
    case 7:
      return "summer";
      break;
    default:
      return "autumn";
  }
};
