var express = require("express");
var bodyParser = require("body-parser");

var db = require("./models");

var PORT = process.env.PORT || 3000;
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

// Routes for favicons
app.use(express.static(__dirname + '/favicon.ico'));
app.use(express.static(__dirname + '/favicon-16x16.png'));
app.use(express.static(__dirname + '/favicon-32x32.png'));
app.use(express.static(__dirname + '/mstile-150x150.png'));
app.use(express.static(__dirname + '/apple-touch-icon.png'));
app.use(express.static(__dirname + '/browserconfig.xml'));
app.use(express.static(__dirname + '/safari-pinned-tab.svg'));
app.use(express.static(__dirname + '/site.webmanifest'));
app.use(express.static(__dirname + '/android-chrome-192x192.png'));
app.use(express.static(__dirname + '/android-chrome-512x512.png'));

// Routes for front end node modules
app.use('/assets/css/fonts/roboto', express.static(__dirname + '/node_modules/materialize-css/dist/fonts/roboto'));
app.use('/assets/css/materialize', express.static(__dirname + '/node_modules/materialize-css/dist/css/'));
// app.use('/assets/fonts/materialize', express.static(__dirname + '/node_modules/materialize-css/dist/fonts/roboto'));
// app.use('/assets/fonts/gsap', express.static(__dirname + '/node_modules/materialize-css/dist/fonts/roboto/-'));
app.use('/assets/css/slick', express.static(__dirname + '/node_modules/slick-carousel/slick/'));
app.use('/assets/javascript/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/assets/javascript/materialize', express.static(__dirname + '/node_modules/materialize-css/dist/js/'));
// app.use('/assets/javascript/gsap', express.static(__dirname + '/node_modules/gsap/src/minified/'));
// app.use('/assets/javascript/scrollmagic', express.static(__dirname + '/node_modules/scrollmagic/scrollmagic/minified/'));
// app.use('/assets/javascript/barbajs/', express.static(__dirname + '/node_modules/barba.js/dist/'));
app.use('/assets/javascript/slick/', express.static(__dirname + '/node_modules/slick-carousel/slick/'));
app.use('/assets/javascript/typed/', express.static(__dirname + '/node_modules/typed.js/lib/'));

var routes = require("./controllers/travelersController.js"); //base controller for hookup purposes

app.use(routes); //so express will go look for routes in travelersController

// connect our db models to sequelize, and connecting app to a port to render app
db.sequelize.sync({force:true}).then(function(err) {
  app.listen(PORT, function () {
    console.log("App listening on port: ", PORT);
    console.log("dis is hooked up :)");
  });
});
