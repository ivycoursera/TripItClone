const request = require("request");

const geonames = (loc, cb) => {
  // const place = encodeURIComponent(loc);
  const url = `http://api.geonames.org/search?q=${loc}&style=SHORT&username=vi29`;
  // const url =
  //   "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
  //   encodeURIComponent(loc) +
  //   ".json?access_token=pk.eyJ1IjoidmkyOSIsImEiOiJjazFncGY2cjUwemJmM25sYjd0endpMmh5In0.QSFOmp3OeFYh7sK9LfmE6g";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log("Unable to connect to location services");
    } else if (body.geonames.length === 0) {
      console.log("unable to find location. Try another search");
    }
    console.log(body.geonames[0].lng);
    console.log(body.geonames[0].lat);
    cb(undefined, {
      latitude: body.geonames[0].lat,
      longitude: body.geonames[0].lng,
    });
  });
};

module.exports = geonames;
