/* Dependencies */
const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const geonames = require("./utils/geonames");
const getForecast = require("./utils/getForecast");
const pixabay = require("./utils/pixabay");

// Start up an instance of app
const app = express();

// setup a port
const port = process.env.PORT || 8081;

//to hold userdata
let projectData = [];

/* Middleware*/
//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

//Initializing the main project folder
app.use(express.static("dist"));

app.get("/", function(req, res) {
  res.sendFile("dist/index.html");
});

//get location coords
app.get("/coords", (req, res) => {
  let time = req.query.time;
  let message;
  console.log(req.query.place);
  if (!req.query.place) {
    return res.send({
      error: "You must specify a location",
    });
  }
  geonames(req.query.place, (error, { latitude, longitude } = {}) => {
    if (error) {
      res.send({ error });
    }
    getForecast(latitude, longitude, time, (error, weatherData) => {
      if (error) {
        res.send({ error });
      }
      !weatherData.daily.summary
        ? (message = weatherData.hourly.summary)
        : (message = weatherData.daily.summary);
      res.send({
        high: weatherData.daily.data[0].temperatureHigh,
        low: weatherData.daily.data[0].temperatureLow,
        message,
      });
    });
  });
});

app.get("/image", (req, res) => {
  let place = req.query.place;
  pixabay(place, (error, data) => {
    if (error) {
      res.send(error);
    }
    console.log(data.hits[0]);
    res.send({
      alt: data.hits[0].tags,
      src: data.hits[0].webformatURL,
    });
  });
});

app.get("/all", (req, res) => {
  res.send(projectData);
});

const server = app.listen(port, () => {
  console.log("Server running");
  console.log(`Server is running on localhost:${port}`);
});

// for testing
module.exports = server;
