const convertToCelsius = function(tempF) {
  let temp = (tempF - 32) * 5/9;
  tempRound = Math.round(temp*10) / 10;
  return tempRound;
};

const convertToFahrenheit = function(tempC) {
  let temp = (tempC * 9/5) + 32;
  tempRound = Math.round(temp*10) / 10;
  return tempRound;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
