const request = require("request");

const pixabay = (loc, cb) => {
  const url = `https://pixabay.com/api/?key=13870626-b6733029d0ba630fd16ce634e&q=${encodeURIComponent(
    loc,
  )}&image_type=photo`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb("Unable to connect to image services");
    }
    cb(undefined, body);
  });
};

module.exports = pixabay;
