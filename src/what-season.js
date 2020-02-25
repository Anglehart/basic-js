module.exports = function getSeason(date) {
  if (typeof date == "undefined") {
    return 'Unable to determine the time of year!'
  } if (isNaN(date)) {
    throw new Error()
  } else if (date.getMonth() < 2 || date.getMonth() == 11) {
    return "winter"
  } else if (date.getMonth() >=2 && date.getMonth() < 5) {
    return "spring"
  } else if (date.getMonth() >=5 && date.getMonth() < 8) {
    return "summer"
  } else if (date.getMonth() >=8 && date.getMonth() < 11) {
    return "fall"
  }
};
