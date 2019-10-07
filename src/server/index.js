/* Dependencies */
const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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

// Save weather data
app.post("/", (req, res) => {
  projectData = [
    {
      temperature: req.body.main.temp,
      date: req.body.dt,
      userResponse: req.body.name,
      message: req.body.weather[0].description,
    },
  ];
});

// get weather data
const weatherKey = process.env.DARK_SKY_SECRET;
let weatherURL =
  "https://api.darksky.net/forecast/" + weatherKey + "/37.8267,-122.4233";

app.get("/getWeather", (req, res) => {
  var url = req.query.text;
  textapi.summarize({ url: decodeURI(url) }, function(error, response) {
    if (error === null) {
      console.log(response);
      res.send(response);
    }
  });
});

app.get("/all", (req, res) => {
  res.send(projectData);
});

const server = app.listen(port, () => {
  console.log("Server running");
  console.log(`Server is running on localhost:${port}`);
});
