const request = require("request");

// get weather data
function getWeather(latitude, longitude, time, cb) {
  let url;
  if (time) {
    url =
      "https://api.darksky.net/forecast/4dc641944bcc7ba6f855373ef69a84cd/" +
      latitude +
      "," +
      longitude +
      "," +
      time;
  } else {
    url =
      "https://api.darksky.net/forecast/4dc641944bcc7ba6f855373ef69a84cd/" +
      latitude +
      "," +
      longitude;
  }

  console.log(url);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log("Unable to connect to weather service");
    } else if (body.error) {
      console.log(`Unable to get weather data due to ${body.error}`);
    } else {
      cb(undefined, body);
    }
  });
}

module.exports = getWeather;
