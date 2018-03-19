var express = require("express");
var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function (req, res) {
    res.send("We are the panda team!!!")
    // res.redirect("/login_page");
});

module.exports = router;