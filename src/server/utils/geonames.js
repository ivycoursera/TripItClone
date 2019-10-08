const request = require("request");

// get coordinates from location
const geonames = (loc, cb) => {
  const url = `http://api.geonames.org/search?q=${loc}&style=SHORT&username=vi29`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb("Unable to connect to location services");
    } else if (body.geonames.length === 0) {
      cb("unable to find location. Try another search");
    }
    cb(undefined, {
      latitude: body.geonames[0].lat,
      longitude: body.geonames[0].lng,
    });
  });
};

module.exports = geonames;
