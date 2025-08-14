const convertToCelsius = function(temp) {
  return roundToNearestTenth((temp - 32) / 1.8)
};

const convertToFahrenheit = function(temp) {
  return roundToNearestTenth((temp * 1.8) + 32)
};

const roundToNearestTenth = function(number) {
  return Math.round(number * 10) / 10
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
