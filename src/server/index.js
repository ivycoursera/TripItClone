/* Dependencies */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Start up an instance of app
const app = express();

// setup a port
const port = 3000;

//to hold userdata
let projectData = [];

/* Middleware*/
//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

//Initializing the main project folder
app.use(express.static("../client"));

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

app.get("/all", (req, res) => {
  res.send(projectData);
});

const server = app.listen(port, () => {
  console.log("Server running");
  console.log(`Server is running on localhost:${port}`);
});
