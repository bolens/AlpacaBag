var express = require("express");
var router = express.Router();
var db = require("../models");

// get route -> main
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/survey", function(req, res) {
  res.render("index");
  res.send("SURVEY");
  // res.redirect("/login_page");
});

// POST route for saving a new user survey
router.post("/api/user", function(req, res) {
  db.User.create({
      name: req.body.name,
      email: req.body.email,
      surveyResults: req.body.surveyResults
    })
    .then(function(result) {
      res.json(result);
    });
});

// GET route for getting all of the destinations
router.get("/api/destinations", function(req, res) {
  console.log(req.body)
  db.Destination.findAll({}).then(function(result) {
    res.json(result);
  });
});

// Get route for retrieving our points of interest from a destination
router.get("/api/poi/:destination", function(req, res) {
  db.PoI.findAll({
    where: {
      destination: req.params.destination
    },
    include: [db.Destination]
  }).then(function(result) {
    console.log(result);
    res.json(result);
    // res.render("handlebar", cityObject);
  });
});

// Get route for retrieving our destination
router.get("/api/destinations/:id", function(req, res) {
  db.Destination.findOne({
    where: {
      id: req.params.id
    },
    include: [db.PoI]
  }).then(function(result) {
    // console.log(result);
    res.json(result);
    res.render("destination", cityObject);
  });
});

// POST route for creating destinations
router.post("/api/destinations/:id", function(req, res) {
  db.PoI.create(
    req.body
  ).then(function(result) {
    res.json(result);
  });
});

// PUT route for updating destinations
router.put("/api/destinations", function(req, res) {
  db.Destination.update(
    req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
    res.json(result);
  });
});

// POST route for creating destinations
router.post("/api/destinations", function(req, res) {
  db.Destination.create(
    req.body
  ).then(function(result) {
    res.json(result);
  });
});

// POST route for creating a point of interest
router.post("/api/poi", function(req, res) {
  db.PoI.create(
    req.body
  ).then(function(result) {
    res.json(result);
  });
});

module.exports = router;
