var express = require("express");
var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function (req, res) {
    res.render("index");
    // res.redirect("/login_page");
});

module.exports = router;
