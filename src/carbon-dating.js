const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(samAc) {
  if (typeof samAc === "string" && /^[0-9.]{1,}$/.test(samAc) && parseFloat(samAc) > 0 && parseFloat(samAc) < 15) {
    let k = 0.693/HALF_LIFE_PERIOD
    let years = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(samAc))/k)
    return years
  } else {
    return false
  }
};
