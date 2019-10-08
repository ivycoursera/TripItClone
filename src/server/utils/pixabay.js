const request = require("request");

const pixabay = (loc, cb) => {
  console.log(loc);
  const url = `https://pixabay.com/api/?key=13870626-b6733029d0ba630fd16ce634e&q=${encodeURIComponent(
    loc,
  )}&image_type=photo`;
  console.log(url);
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log("Unable to connect to image services");
    }
    cb(undefined, body);
  });
};

module.exports = pixabay;
