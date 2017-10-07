// After installing node modules, import them here
var express = require("express");
var path = require("path");

// Creating the express app
var app = express();

var counter = 0;

// Defining the static folder
app.use(express.static(path.join(__dirname, "./static")));

// Setting up folder path of views folder and ejs templating engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Starting the Node server listening on port 8000
var server = app.listen(8000, function() {
    console.log("Listening on port 8000");
});

// Getting all the routes defined in the folder path
var routes = require('./routes/routes.js')(app, server, counter);