const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(seasonDate) {
  let month = 12;
  if (seasonDate === undefined) { return 'Unable to determine the time of year!'}
  if ( seasonDate instanceof Date) {
    month = seasonDate.getMonth()
    if (month == 11 || month < 2) { return 'winter'}
    else if (month < 5 && month > 1) { return 'spring' }
    else if (month < 8 && month > 4) { return 'summer'}
    else { return 'autumn'}
  } else {
    throw new CustomError('Error');
}
};
