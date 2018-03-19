var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var PORT = process.env.PORT || 3306;
var app = express(); // using app to access express methods

// serve up static content for the app from the "public" directory. Can edit this to be more specific later
app.use(express.static("public"));

//parsing data. I set it to true to take in multiple data types (strings, arrays, etc)
app.use(bodyParser.urlencoded({ extended: true }));

// parse application in json
app.use(bodyParser.json());
//require handlebars so we can use its templating structure
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/travelersController.js"); //base controller for hookup purposes

app.use(routes); //so express will go look for routes in travelersController

// connect our db models to sequelize, and connecting app to a port to render app
db.sequelize.sync({force:true}).then(function(){
  app.listen(PORT, function () {
    console.log("App listening on port: ", PORT);
    console.log("dis is hooked up :)")
  });
});